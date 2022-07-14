let a = function () {
    console.log(1)
}
console.log(typeof(a)) //'function'

/**
 * 什么时候会进行隐式转化
 */


// 这里不会进行隐式转化 字符串的undefiend与undefined 值不相等
let b
let res = typeof(b)
console.log(res) // undefined
console.log(undefined == res) // false

/** 注意数组是Object的实例对象，函数也是Object的实例对象 */
let a1 = []
let a2 = function () {}
console.log(a1 instanceof Array,a1 instanceof Object); //true,true
console.log(a1 instanceof Function,a1 instanceof Object); //true,true