import { isNil } from '~/shared/utils';

export const paginateResults = ({
  results,
  pageSize,
  cursor,
  getCursor,
}: {
  results: any[];
  pageSize: number;
  cursor?: string;
  getCursor?: (item: any) => string;
}) => {
  // User has requested no items
  if (pageSize < 1) {
    return {
      edges: [],
      pageInfo: getPageInfo({
        results,
        pageSize,
        cursorIndex: null,
        getCursor,
      }),
    };
  };

  // User has requested the first pageSize items
  if (isNil(cursor)) {
    return {
      edges: results.slice(0, pageSize),
      pageInfo: getPageInfo({
        results,
        pageSize,
        cursorIndex: null,
        getCursor,
      }),
    };
  };

  const cursorIndex = results.findIndex(item => {
    const itemCursor = item.cursor ?? getCursor(item);
    return itemCursor ? cursor === itemCursor : false;
  });

  // User requested a set of items succeeding a cursor that does not exist
  if (cursorIndex < 0) {
    return {
      edges: [],
      pageInfo: getPageInfo({
        results,
        pageSize,
        cursorIndex,
        getCursor,
      }),
    };
  }

  // User requested pageSize items after an existing cursor
  return {
    edges: results.slice(cursorIndex + 1, cursorIndex + 1 + pageSize),
    pageInfo: getPageInfo({
      results,
      pageSize,
      cursorIndex,
      getCursor,
    }),
  };
}

const getPageInfo = ({
  results,
  pageSize,
  cursorIndex,
  getCursor,
}: {
  results: any[];
  pageSize: number;
  cursorIndex?: number;
  getCursor?: (item: any) => string;
}) => {
  const totalCount = results.length;

  // User has requested no items or items following a cursor that does not exist
  if (pageSize < 1 || cursorIndex < 0) {
    return {
      hasNextPage: false,
      nextPage: null,
      hasPrevPage: false,
      prevPage: null,
      totalCount,
    };
  };

  // User has requested the first pageSize items
  if (isNil(cursorIndex)) {
    const hasNextPage = pageSize < results.length;
    const nextPage = hasNextPage
      ? results[pageSize - 1].cursor ?? getCursor(results[pageSize - 1])
      : null;
    return {
      hasNextPage,
      nextPage,
      hasPrevPage: false,
      prevPage: null,
      totalCount,
    };
  };

  // User requested pageSize items after an existing cursor
  const hasNextPage = cursorIndex + pageSize < results.length - 1;
  const nextPage = hasNextPage
    ? results[cursorIndex + pageSize].cursor ?? getCursor(results[cursorIndex + pageSize])
    : null;

  const prevPage = cursorIndex - pageSize >= 0
    ? results[cursorIndex - pageSize].cursor ?? getCursor(results[cursorIndex - pageSize])
    : null;

  return {
    hasNextPage,
    nextPage,
    hasPrevPage: true,
    prevPage,
    totalCount,
  };
};
