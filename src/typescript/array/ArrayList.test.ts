/**-------------------------------------------*
 * @TypeScript
 * @ArrayList Unit Tests
 *--------------------------------------------*/

import ArrayList from './ArrayList';

describe('Tests for ArrayList', () => {
  it('should return size = 0 for empty []', () => {
    expect(new ArrayList<number>().size()).toStrictEqual(0);
    expect(new ArrayList<number>().get()).toStrictEqual([]);
  });

  it('should return the array []', () => {
    expect(new ArrayList<number>().get()).toStrictEqual([]);
    expect(new ArrayList<number>([1]).get()).toStrictEqual([1]);
    expect(new ArrayList<number>([1, 7]).get()).toStrictEqual([1, 7]);
    const arr = new ArrayList<number>([1, 5, 7]);
    arr.addAt(1, 9, 10);
    expect(arr.get()).toStrictEqual([1, 9, 10, 5, 7]);
  });

  it('should add items in the array', () => {
    const arr = new ArrayList<number>();
    expect(arr.get()).toStrictEqual([]);
    arr.add(7);
    expect(arr.get()).toStrictEqual([7]);
    arr.add(7);
    expect(arr.get()).toStrictEqual([7, 7]);
    arr.addAt(0, 5);
    expect(arr.get()).toStrictEqual([5, 7, 7]);
    arr.addAt(1, 5, 7);
    expect(arr.get()).toStrictEqual([5, 5, 7, 7, 7]);
  });

  it('should remove items from the array', () => {
    const arr = new ArrayList<number>([1, 2, 3, 4, 5]);
    expect(arr.pop()).toStrictEqual(5);
    arr.remove();
    expect(arr.get()).toStrictEqual([1, 2, 3]);
    arr.remove(1);
    expect(arr.get()).toStrictEqual([1, 3]);
    arr.remove(0, 2);
    expect(arr.get()).toStrictEqual([]);
  });
});
