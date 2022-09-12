const { log } = console;
//注意借用数组解构赋值的时候，在前面加上分号
Array.prototype.shuffle = function (){
    const length = this.length
    const copy = this.slice()
    for(let i = length - 1;i > 0;i--){
        const random = Math.floor(Math.random() * i)
        log(random,i)
        ;[copy[i],copy[random]] = [copy[random],copy[i]]
    }
    return copy
}
const nums = [1, 2, 3, 4, 5];
log(nums.shuffle());
// -> [ 4, 1, 5, 2, 3 ]