/**-------------------------------------------*
 * @ArrayList Source Code
 * A sequence of similar data type collections.
 *--------------------------------------------*/

export class ArrayList {
  constructor(list = []) {
    this.list = list;
  }

  size() {
    return this.list.length;
  }
}
