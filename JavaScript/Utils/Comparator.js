export default class Comparator {
  /**
   * if a comparafunction is provided, we will use it
   * otherwise use the default one
   * @updates the compare value
   */
  constructor(customCompareFunction) {
    this.compare = customCompareFunction || Comparator.defaultCompareFunction;
  }

  /**
   * the default comparison function
   * the compared values can be string or number
   * @returns 0, -1 or 1
   */
  static defaultCompareFunction(a, b) {
    if (a === b) {
      return 0;
    }
    return a < b ? -1 : 1;
  }
}
