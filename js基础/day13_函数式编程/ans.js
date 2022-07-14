const {log} = console

// 手写一个柯里化函数
function curry(func) {
    //这个函数不能写成箭头函数形式，因为这个是递归函数，
    // 在内部是需要调用自己的，需要用 function 声明，内部才能访问到这个函数，
    // 进行递归调用(箭头函数是匿名函数，没有名字)
    return function curried(...args){ 
        if(args.length >= func.length) return func(...args)
        return (...preArgs) => curried(...args,...preArgs)
    }
}
log(curry(log)(1)(2))

// 手写一个管道函数
function pipe(...Funcs){
    log('Funcs',Funcs) //查看这个收集参数的Funcs，是一个什么数据类型，拥有什么属性和方法（为啥可迭代）

    return (arg) => Funcs.reduce( (preValue,Func) => Func(preValue),arg)
}

// 手写一个记忆函数
function memorize(func){
    let map = new Map()
    // return (key) =>  map.set(key,map.has(key) ? map.get(key)+1 : 1)
    return (key) => {
        if(map.has(JSON.stringify(key))) return map.get(JSON.stringify(key))
        let res = func(key)
        map.set(JSON.stringify(key),res)
        return res
    } 
}

// 使用函数式手写一道算法题：获取一个数组内出现次数大于 k 的元素
// function getEle = () =>

// let map = new Map()
// const getEleTimesMap = function(nums){
//     // nums.reduce( (key) => map.set(key,map.has(key) ? map.get(key)+1 : 1),[])
// }
// const getEleTimesMap = (nums) => nums.reduce( (preMap,value) =>  { 
//     preMap.set(preMap.has(value) ? preMap.get(value)+1 : 1) 
//     return preMap
// } , new Map())
// pipe()