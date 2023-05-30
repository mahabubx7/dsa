/**-------------------------------------------*
 * @LinkedList Source Code
 * @type Singly LinkedList
 *--------------------------------------------*/

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next || null;
  }
}

export default class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(item) {
    const node = new Node(item);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size += 1;
      return;
    }

    const latestNode = this.tail;
    latestNode.next = node;
    this.tail = node;
    this.size += 1;
    return;
  }

  remove(index = null) {
    if (typeof index === 'number' && index < 0) {
      return Error('invalid position or index number.');
    }
    if (typeof index === 'number' && index === 0) {
      this.head = this.head.next;
      return;
    }
    if (typeof index === 'number' && index > 0) {
      let current = this.head;
      let i = 0,
        prev = null;
      while (index > i) {
        i += 1;
        prev = current;
        current = current.next;
      }
      prev.next = current.next;
      return;
    }

    let current = this.head,
      prev = null;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    prev.next = null;
    return;
  }

  getSize() {
    return this.size;
  }

  print() {
    let result = '';
    let current = this.head;
    if (current === null) return 'empty linked-list!';
    while (current.next !== null) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += current.data;
    return result;
  }
}
