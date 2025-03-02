var Sorter = /** @class */ (function () {
    function Sorter(data) {
        this.data = data;
    }
    Sorter.prototype.sortData = function () {
        return this.data.sort();
    };
    return Sorter;
}());
var arr1 = new Sorter(["d", "a", "c", "b"]);
var arr2 = new Sorter([2, 3, 5, 9, 1]);
var arr3 = new Sorter([true, false, true, false]);
console.log(arr1.sortData());
console.log(arr2.sortData());
