// 柯里化函数
function curry(fun){
    return function curriedFun(...preArgs){
        if(preArgs.length >= fun.length) return fun(...preArgs)
        return function (...args){
            return curriedFun(...preArgs,...args)
        }
    }
}
function sum(a,b,c,d,e){
    return a + b + c + d + e
}
function testSum(...args){
    console.log(...args)
    console.log(args) //数组，Array的实例
}
// testSum(1,2,34,5)

// const curriedFun = curry(sum)
// const res = curriedFun(1)(3)(1,1,1)
// console.log(res)


// 管道函数
function pipe(...funcs) {
    // return function(args) {
    //     return [...funcs].slice(1).reduce( (pre,curFun) => curFun(preFun(pre)),funcs[0](args))
    // }
    return (arg) => ( funcs.reduce( (pre,curFun) => curFun(pre) , arg ) )
}
//写成一个纯函数（输入和输出）,这里还需要注意管道函数的参数函数只能有一个参数
// const trim = (arg) => String.prototype.trim.call(arg)
// const toUpperCase = (arg) => String.prototype.toUpperCase.call(arg)
// const pipedFun = pipe(trim,toUpperCase,console.log)
// pipedFun('  hello ')

//记忆函数
function memorize(func) {
    let map = new Map()
    return function(...arg) {
        if(map.has(JSON.stringify(arg))) return map.get(JSON.stringify(arg))
        const result = func(...arg)
        console.log('计算了',result)
        map.set((JSON.stringify(arg)),result)
        return result
    }
}
// const memorizedFun = memorize(sum)
// memorizedFun(1,1,1,1,1)
// memorizedFun(1,1,1,2,1)
// memorizedFun(1,1,1,1,1)


