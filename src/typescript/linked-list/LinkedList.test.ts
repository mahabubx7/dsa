/**-------------------------------------------*
 * @TypeScript
 * @LinkedList Unit Tests
 * @type Singly LinkedList
 *--------------------------------------------*/

import LinkedList from './LinkedList';

describe('Tests for LinkedList', () => {
  it('should return size = 0 for empty linked-list', () => {
    expect(new LinkedList().getSize()).toStrictEqual(0);
  });

  it('should be able to add nodes in linked-list', () => {
    const ll = new LinkedList<number>();
    ll.add(7); // first
    expect(ll.getSize()).toStrictEqual(1);
    ll.add(10); // second
    expect(ll.getSize()).toStrictEqual(2);
    ll.add(1); // third
    expect(ll.getSize()).toStrictEqual(3);
    expect(ll.print()).toBe('7 -> 10 -> 1');
  });

  it('should be able to remove nodes from linked-list', () => {
    const ll = new LinkedList<number>();
    ll.add(7);
    ll.add(5);
    ll.add(0);
    ll.add(2);
    ll.add(3);
    expect(ll.getSize()).toEqual(5);
    expect(ll.print()).toBe('7 -> 5 -> 0 -> 2 -> 3');
    ll.remove(); // by default, removes the last item
    expect(ll.print()).toBe('7 -> 5 -> 0 -> 2');
    ll.remove(0); // removes from the first-index
    expect(ll.print()).toBe('5 -> 0 -> 2');
    ll.remove(1); // removed from specific position
    expect(ll.print()).toBe('5 -> 2');
    ll.remove(1); // removed from the last-index
    expect(ll.print()).toBe('5');
  });
});
