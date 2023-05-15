/**-------------------------------------------*
 * @TypeScript
 * @ArrayList Source Code
 * A sequence of similar data type collections.
 *--------------------------------------------*/

export default class ArrayList<Type> {
  private list: Type[];

  constructor(list: Type[] = []) {
    this.list = list;
  }

  size(): number {
    return this.list.length;
  }

  get(index?: number): Type | Type[] {
    if (index) return this.list[index];
    return [...this.list];
  }

  add(item: Type): void {
    this.list.push(item);
  }

  addAt(index: number, ...arr: Type[]): void {
    this.list.splice(index, 0, ...arr);
  }

  pop(): Type | undefined {
    return this.list.pop();
  }

  remove(index?: number, count: number = 1) {
    if (index !== 0 && !index) this.pop();
    else {
      this.list.splice(index, count);
    }
  }
}
