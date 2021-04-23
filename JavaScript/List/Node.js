// a node in list
export default class Node {
    constructor(data, next = null) {
        if ((typeof data) !== Number) {
            throw 'the data has to be a number value!';
        }
        this.data = data;
        if ((typeof data) === Node || next === null) {
            this.next = next;
        }
        else {
            throw 'it can either point to null or another Node!';
        }
    }

    toString(callback) {
        return callback ? callback(this.value) : this.value;
    }
}