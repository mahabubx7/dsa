/**-------------------------------------------*
 * @TypeScript
 * @ArrayList Unit Tests
 * A sequence of similar data type collections.
 *--------------------------------------------*/

import { ArrayList } from './ArrayList';

describe('Tests for ArrayList', () => {
  it('should return size = 0 for empty array', () => {
    const arr = new ArrayList(); // empty
    expect(arr.size()).toBe(0);
  });
});
