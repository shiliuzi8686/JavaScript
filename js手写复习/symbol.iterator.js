Number.prototype[Symbol.iterator] = function (){
    let value = 0 //自由变量，形成了闭包
    return {
        next: () => ({
            value,
            done: value++ === this.valueOf()
        })
    }
}
let num = 5
for(let value of num){ //for-of遍历就是调用的iterator接口
    console.log(value)
}