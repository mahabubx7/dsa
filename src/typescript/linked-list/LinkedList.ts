/**-------------------------------------------*
 * @TypeScript
 * @LinkedList Source Code
 * @type Singly LinkedList
 *--------------------------------------------*/

class Node<Type> {
  public data: Type;
  public next: Node<Type> | null;

  constructor(data: Type, next: Node<Type> | null = null) {
    this.data = data;
    this.next = next;
  }
}

export default class LinkedList<Type> {
  private size: number;
  private head: Node<Type> | null;
  private tail: Node<Type> | null;

  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  add(item: Type): void {
    const node = new Node(item);

    if (this.size === 0) {
      this.head = node;
      this.tail = node;
      this.size += 1;
      return;
    }

    const latestNode: Node<Type> | null = this.tail;
    if (latestNode) latestNode.next = node;
    this.tail = node;
    this.size += 1;
    return;
  }

  remove(index?: number | undefined): void | Error {
    if (index !== undefined && index < 0) {
      return Error('invalid position or index number.');
    }
    if (index !== undefined && index === 0) {
      if (this.head) this.head = this.head.next;
      return;
    }
    if (index !== undefined && index > 0) {
      let current: Node<Type> | null = this.head;
      let i = 0;
      let prev: Node<Type> | null = null;
      while (index > i) {
        i += 1;
        prev = current;
        if (current) current = current.next;
      }
      if (prev && current) prev.next = current.next;
      return;
    }

    let current: Node<Type> | null = this.head;
    let prev: Node<Type> | null = null;
    while (current && current.next !== null) {
      prev = current;
      current = current.next;
    }
    this.tail = prev;
    if (prev) prev.next = null;
    return;
  }

  getSize(): number {
    return this.size;
  }

  print(): string {
    let result = '';
    let current: Node<Type> | null = this.head;
    if (current === null) return 'empty linked-list!';
    while (current.next !== null) {
      result += `${current.data} -> `;
      current = current.next;
    }
    result += current.data;
    return result;
  }
}
