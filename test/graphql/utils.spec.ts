import { paginateResults } from '~/graphql/utils';

describe('graphql/utils', () => {
  let results: any[];
  let getCursor: (item: any) => string;

  beforeEach(() => {
    results = [
      { id: 'item0' },
      { id: 'item1' },
      { id: 'item2' },
      { id: 'item3' },
      { id: 'item4' },
      { id: 'item5' },
    ];
    getCursor = (item: any) => item.id;
  });

  describe('paginateResults', () => {
    it('should return the appropriate response when a user requests no items', () => {
      const { edges, pageInfo } = paginateResults({ results, pageSize: 0, getCursor });
      expect(edges).toEqual([]);
      expect(pageInfo.hasNextPage).toBeFalsy();
      expect(pageInfo.nextPage).toBeNull();
      expect(pageInfo.hasPrevPage).toBeFalsy();
      expect(pageInfo.prevPage).toBeNull();
      expect(pageInfo.totalCount).toBe(6);
    });

    describe('first set of items', () => {
      it('should return the appropriate response when the number of items requested exceeds the total number of items', () => {
        const { edges, pageInfo } = paginateResults({ results, pageSize: 10, getCursor });
        expect(edges).toEqual(results);
        expect(pageInfo.hasNextPage).toBeFalsy();
        expect(pageInfo.nextPage).toBeNull();
        expect(pageInfo.hasPrevPage).toBeFalsy();
        expect(pageInfo.prevPage).toBeNull();
        expect(pageInfo.totalCount).toBe(6);
      });
  
      it('should return the appropriate response when the number of items requested is less than the total number of items', () => {
        const { edges, pageInfo } = paginateResults({ results, pageSize: 3, getCursor });
        expect(edges).toEqual(results.slice(0, 3));
        expect(pageInfo.hasNextPage).toBeTruthy();
        expect(pageInfo.nextPage).toBe(getCursor(results[2]));
        expect(pageInfo.hasPrevPage).toBeFalsy();
        expect(pageInfo.prevPage).toBeNull();
        expect(pageInfo.totalCount).toBe(6);
      });
    });

    describe('set of items after an existing cursor', () => {
      describe('next pages', () => {
        it('should return the appropriate response when the number of items requested exceeds the remaining number of items', () => {
          const pageSize = 4;
          const cursor = getCursor(results[2]);
          const { edges, pageInfo } = paginateResults({ results, pageSize, cursor, getCursor });
  
          expect(edges).toEqual(results.slice(3));
          expect(pageInfo.hasNextPage).toBeFalsy();
          expect(pageInfo.nextPage).toBeNull();
          expect(pageInfo.totalCount).toBe(6);
        });
  
        it('should return the appropriate response when the number of items requested is less than the remaining number of items', () => {
          const pageSize = 2;
          const cursor = getCursor(results[1]);
          const { edges, pageInfo } = paginateResults({ results, pageSize, cursor, getCursor });
  
          expect(edges).toEqual(results.slice(2, 4));
          expect(pageInfo.hasNextPage).toBeTruthy();
          expect(pageInfo.nextPage).toBe(getCursor(results[3]));
          expect(pageInfo.totalCount).toBe(6);
        });
      });

      describe('previous pages', () => {
        it('should return the appropriate response when the number of items requested exceeds the skipped number of items', () => {
          const pageSize = 3;
          const cursor = getCursor(results[1]);
          const { edges, pageInfo } = paginateResults({ results, pageSize, cursor, getCursor });
  
          expect(edges).toEqual(results.slice(2, 5));
          expect(pageInfo.hasPrevPage).toBeTruthy();
          expect(pageInfo.prevPage).toBeNull();
          expect(pageInfo.totalCount).toBe(6);
        });

        it('should return the appropriate response when the number of items requested equals the skipped number of items', () => {
          const pageSize = 3;
          const cursor = getCursor(results[2]);
          const { edges, pageInfo } = paginateResults({ results, pageSize, cursor, getCursor });
  
          expect(edges).toEqual(results.slice(3, 6));
          expect(pageInfo.hasPrevPage).toBeTruthy();
          expect(pageInfo.prevPage).toBeNull();
          expect(pageInfo.totalCount).toBe(6);
        });
  
        it('should return the appropriate response when the number of items requested is less than the skipped number of items', () => {
          const pageSize = 2;
          const cursor = getCursor(results[3]);
          const { edges, pageInfo } = paginateResults({ results, pageSize, cursor, getCursor });
  
          expect(edges).toEqual(results.slice(4, 6));
          expect(pageInfo.hasPrevPage).toBeTruthy();
          expect(pageInfo.prevPage).toBe(getCursor(results[1]));
          expect(pageInfo.totalCount).toBe(6);
        });
      });
    });

    it('should return the appropriate response when a set of items after a non-existent cursor is requested', () => {
      const { edges, pageInfo } = paginateResults({ results, pageSize: 3, cursor: 'nonExistentCursor', getCursor });
      expect(edges).toEqual([]);
      expect(pageInfo.hasNextPage).toBeFalsy();
      expect(pageInfo.nextPage).toBeNull();
      expect(pageInfo.hasPrevPage).toBeFalsy();
      expect(pageInfo.prevPage).toBeNull();
      expect(pageInfo.totalCount).toBe(6);
    });
  });
});
