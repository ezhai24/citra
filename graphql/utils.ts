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
  if (pageSize < 1) {
    return [];
  };

  if (!cursor) {
    return results.slice(0, pageSize);
  };

  const cursorIndex = results.findIndex(item => {
    const itemCursor = item.cursor ?? getCursor(item);
    return itemCursor ? cursor === itemCursor : false;
  });

  if (cursorIndex < 0) {
    return [];
  }

  return results.slice(cursorIndex + 1, cursorIndex + 1 + pageSize);
}