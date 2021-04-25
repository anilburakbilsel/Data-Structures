export default class Comparator {
  /**
   * if a compare function is provided, we will use it
   * otherwise we use the default one
   * @update the compare value
   */
  constructor(customCompareFunction) {
    this.compare = customCompareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * the default comparison function
   * the compared values can be string or number
   * the order is from a to b
   * @return {0, -1 or 1}
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }

  /**
   * checks if two variables are equal
   * @return {boolean}
   */
  equal(a, b) {
    return this.compare(a, b) === 0;
  }

  /**
   * checks if variable "a" is less than "b"
   * @return {boolean}
   */
   lessThan(a, b) {
    return this.compare(a, b) < 0;
  }

  /**
   * checks if variable "a" is greater than "b"
   * @return {boolean}
   */
  greaterThan(a, b) {
    return this.compare(a, b) > 0;
  }

  /**
   * checks if variable "a" is less than or equal to "b"
   * @return {boolean}
   */
  lessThanOrEqual(a, b) {
    return this.lessThan(a, b) || this.equal(a, b);
  }

  /**
   * checks if variable "a" is greater than or equal to "b"
   * @return {boolean}
   */
  greaterThanOrEqual(a, b) {
    return this.greaterThan(a, b) || this.equal(a, b);
  }

  /**
   * this reverses the comparison order
   */
  reverse() {
    const compareOriginal = this.compare;
    this.compare = (a, b) => compareOriginal(b, a);
  }
}
