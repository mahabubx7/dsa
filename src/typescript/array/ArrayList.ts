/**-------------------------------------------*
 * @TypeScript
 * @ArrayList Source Code
 * A sequence of similar data type collections.
 *--------------------------------------------*/

export class ArrayList<Type> {
  private list: Type[];

  constructor(list = []) {
    this.list = list;
  }

  size() {
    return this.list.length;
  }
}
