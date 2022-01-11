import { sortByName } from './array-helper';

describe('Array helper, SortByName', () => {
  it('should order list by name', () => {
    const list = [{ name: 'Clark' }, { name: 'Bruce' }, { name: 'Clark' }, { name: 'Peter' }].sort(sortByName);
    expect(list).toEqual([{ name: 'Bruce' }, { name: 'Clark' }, { name: 'Clark' }, { name: 'Peter' }]);
  });
});
