/**-------------------------------------------*
 * @LinkedList Unit Tests
 *--------------------------------------------*/

import LinkedList from './LinkedList';

describe('Tests for LinkedList', () => {
  it('should return size = 0 for empty linked-list', () => {
    expect(new LinkedList().getSize()).toStrictEqual(0);
  });

  it('should be able to add nodes in linked-list', () => {
    const ll = new LinkedList();
    ll.add(7); // first
    expect(ll.getSize()).toStrictEqual(1);
    ll.add(10); // second
    expect(ll.getSize()).toStrictEqual(2);
    ll.add(1); // third
    expect(ll.getSize()).toStrictEqual(3);
    expect(ll.print()).toBe('7 -> 10 -> 1');
  });
});
