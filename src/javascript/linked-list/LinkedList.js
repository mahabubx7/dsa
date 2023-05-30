/**-------------------------------------------*
 * @LinkedList Source Code
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

  getSize() {
    return this.size;
  }

  print() {
    let result = '';
    let current = this.head;
    while (current.next !== null) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += current.data;
    return result;
  }
}
