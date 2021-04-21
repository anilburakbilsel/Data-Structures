// a node in list
export default class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }

    toString(callback) {
        return callback ? callback(this.value) : this.value;
    }
}