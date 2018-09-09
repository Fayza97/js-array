function MyArray() {
    //push method
    this.add = function (x) {

        return this[this.length++] = x;
    }
    //pop method
    this.remove = function (x) {

        return this[this.length - 1] = x;
    }
}

MyArray.prototype = Array.prototype;

let arr = new MyArray();
arr.push(4);

arr.add(6);
arr.pop(4);
arr.remove(4);
console.log(arr);
//its unshif method
let value = 15,
    i, arr = [11, 23, 40, 10];
unshift(arr);

function unshift(arr) {
    for (i = arr.length - 1; i >= 0; --i) {
        arr[i + 1] = arr[i];
    }
    arr[0] = value;
};
console.log(arr);