/**-------------------------------------------*
 * @ArrayList Source Code
 *--------------------------------------------*/

export default class ArrayList {
  constructor(list = []) {
    this.list = list;
  }

  size() {
    return this.list.length;
  }

  get(index = null) {
    if (index) return this.list[index];
    return [...this.list];
  }

  add(item) {
    this.list.push(item);
  }

  addAt(index, ...arr) {
    this.list.splice(index, 0, ...arr);
  }

  pop() {
    return this.list.pop();
  }

  remove(index = null, count = 1) {
    if (index !== 0 && !index) this.pop();
    else {
      this.list.splice(index, count);
    }
  }
}
