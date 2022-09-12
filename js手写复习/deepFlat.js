Array.prototype.deepFlat = function () {
    const copy = this.slice()
    return copy.reduce( (pre,curItem) => pre.concat(Array.isArray(curItem) ? curItem.deepFlat() : curItem) ,[])
}
const { log } = console;
const arr = [1, [2], [3, [4]], [[[6]]]];
log(arr.deepFlat());