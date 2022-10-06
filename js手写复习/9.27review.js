const { log } = console;

// instanceOf
function instanceOf(instance,constructor){
    // 是用来获取实例的构造函数上的prototype属性，也是实例身上的__proto__属性
    let curProto = Object.getPrototypeOf(instance)
    while(curProto){
        if(curProto === constructor.prototype) return true
        curProto = Object.getPrototypeOf(curProto)
    }
    return false
}

// bigint
function myBig(str1,str2){
    str1 = str1.split('').reverse()
    str2 = str2.split('').reverse()
    const len = str1.length >= str2.length ? str1.length : str2.length
    let sum = 0
    let carry = 0
    const res = []
    for(let i = len - 1;i >= 0;i--){
        sum = Number(str1[i] || 0) + Number(str2[i] || 0) + carry
        carry = sum > 9 ? 1 : 0
        res.push(carry ? sum - 10 : sum)
    }
    if(carry) res.push(1)
    return res.join('')
}
const str1 = '123'
const str2 = '45600'
// console.log(myBig(str1,str2))

String.prototype.myTrim = function(){
    const patter = /(^\s+)|(\s+$)/g
    return this.valueOf().replace(patter,'')
}
const inputStr = '  hello, world! ';
// console.log(inputStr.myTrim());


// deepClone
function deepClone(value){
    if(Object(value) !== value || value instanceof Function) return value
    // 解决循环引用问题
    if(!deepClone.cache) deepClone.cache = new WeakSet()
    if(deepClone.cache.has(value)) return value
    deepClone.cache.add(value)
    let resObj = Object.create(Object.getPrototypeOf(value))
    // log(Object.keys(value))
    Object.keys(value).forEach( k => resObj[k] = deepClone(value[k]))
    return resObj
}
// 输入 1
const articles = [
    {
      title: '深拷贝',
      subTitle: '怎么实现深拷贝',
      authorInfo: {
        name: 'trigold',
        id: 123456789,
      },
      content: '深拷贝是指深层的拷贝方式...',
    },
    {
      title: '原型链',
      subTitle: '怎么实现寄生式组合继承',
      authorInfo: {
        name: 'trigold',
        id: 123456789,
      },
      content: '寄生式组合继承是流行的继承方式...',
    },
  ];
  
  const articlesCopy = deepClone(articles);
//   log(articlesCopy);
  
  // 输入2：测试循环引用
  function CircularReferedObj() {
    this.info = 'foo';
    this.circular = this;
  }
  
  const circularReferedObj = new CircularReferedObj();
//   log(circularReferedObj.circular.circular.circular.circular.info);
  
  const circularReferedObjCopy = deepClone(circularReferedObj);
//   log(circularReferedObjCopy);

// function supType(){

// }
// supType.prototype.supMethods = () => {
//     console.log('sup methods')
// }
// function subType(){

// }
// subType.prototype = new supType()
// subType.prototype.subMethods = () => {
//     console.log('sub methods')
// }

// function supType(){}
// supType.prototype.supMethods = () => {
//     console.log('sup methods')
// }
// function subType(){

// }
// // subType.prototype = Object.create(Object.getPrototypeOf(supType))
// subType.prototype = Object.create(supType.prototype)
// Object.defineProperty(subType.prototype,'constructor',{
//     value:subType,
//     writable:true,
//     enumerable:false,
//     configurable:true
// })
// subType.prototype.subMethods = () => {
//     console.log('sub methods')
// }

// function supType(name){
//     this.name = name
// }
// function subType(name,school){
//     supType.call(this,name)
//     this.school = school
// }
// subType.prototype = Object.create(Object.getPrototypeOf(supType))

// function supType(name) {
//     this.name = name
// }
// supType.prototype.supMethods = () => {
//     console.log('sup methods')
// }
// function subType(name,school) {
//     supType.call(this,name)
//     this.school = school
// }
// subType.prototype = new supType()
// subType.prototype.subMethods = () => {
//     console.log('sub methods')
// }
        // 函数的参数呢？？？一看到函数就要想到参数和返回值
        // function myNew(Fun){
        //     const resObj = Object.create(Fun.prototype)
        //     Fun.call(resObj)
        //     return resObj
        // }
function myNew(Fun,...args){
    const resObj = Object.create(Fun.prototype)
    Fun.call(resObj,...args)
    return resObj
}
function FUNC(name,age){
    this.name = name 
    this.age = age 
}
let myInstance = myNew(FUNC,'嘿嘿嘿',20)
// console.log('myInstance',myInstance);

'use strict';
Object.prototype.deepFreeze = function (obj){
    if(Object(obj) !== obj) return obj
    Object.keys(obj).forEach( key => {
        if(obj[key] instanceof Object) Object.deepFreeze(obj[key])
    })
    Object.freeze(obj)
    return obj
}
const obj1 = {
    info: 'obj1',
};

const obj2 = Object.deepFreeze({
    info: 'obj2',
    obj1,
});

// log(obj2);
obj2.obj1.info = 'obj1 changed';
// log(obj2);

// 观察者模式


// myDeepFlat
            // Array.prototype.myDeepFlat = function () {
            //     const copy = this.slice()
            //     return copy.reduce( (pre,cur) => pre.concat(Array.isArray(cur) ? (...cur.myDeepFlat()) : cur),[])
            // }
const arr = [1, [2], [3, [4]], [[[6]]]];
Array.prototype.myDeepFlat = function () {
    const copy = this.slice()
    return copy.reduce( (pre,cur) => pre.concat(Array.isArray(cur) ? cur.myDeepFlat() : cur),[])
}
// log(arr.myDeepFlat());


        // 写的什么玩意儿？？？
        // Array.prototype.myReduce = function(reducer,initial){
        //     const copy = this.slice()
        //     if(initial) copy.unshift(initial)
        //     if(copy.length === 1) return copy
        //     let initRes = reducer(copy[0],copy[1])
        //     return reducer(initRes,copy.slice(2))
        // }
Array.prototype.myReduce = function(reducer,initial){
    const copy = this.slice()
    if(initial) copy.unshift(initial)
    if(copy.length === 1) return copy
    let initRes = reducer(copy[0],copy[1])
    return [initRes,...copy.slice(2)].myReduce(reducer)
}
// log([1, 2, 3].myReduce((pre, cur) => pre + cur, 10));

Array.prototype.shuffle = function(){
    const copy = this.slice()
    for(let i = copy.length - 1;i > 0;i--){
        const random = Math.floor(Math.random() * i)
        ;[copy[random],copy[i]] = [copy[i],copy[random]]
    }
    return copy
}
const nums = [1, 2, 3, 4, 5];
// log(nums.shuffle());

// 数组去重？？？
Array.prototype.unique = function(){
    const copy = this.slice()
    return [...new Set(copy)]
}


// call
Function.prototype.call = function(obj,...args){
    const valueOfObj = typeof obj
    let wrapper = null
    if(['string','number','boolean'].includes(valueOfObj)){
        switch (valueOfObj){
            case 'string' :
                wrapper = new String(obj)
                break;
            case 'number' :
                wrapper = new Number(obj)
                break;
            case 'boolean' :
                wrapper = new Boolean(obj)
                break;
        }
        wrapper._selfFn = this
        return wrapper._selfFn(...args)
    }
    const sym = Symbol('this')
    obj[sym] = this
    const result = obj[sym](...args)
    delete obj[sym]
    return result
}

Function.prototype.myBind = function(thisArg,...preArgs){
    return (...args) => {
        return this.call(thisArg,...preArgs,...args)
    }
}

function factorial(n){
    if(n === 0) return 1
    return n * factorial(n - 1)
}

function fabonacci(n){
    if(n === 0) return 0
    if(n === 1) return 1
    return fabonacci(n - 1) + fabonacci(n - 2)
}

function sum(n){
    if(n === 0) return 0
    return n + sum(n - 1)
}

function reverse(arr){
    if(arr.length === 1) return arr
    return [arr[arr.length - 1],...reverse(arr.slice(0,-1))]
}
// log(reverse([1, 2, 3, 4, 5]));

const str = 'yakayp';
// function isPalindrome(str){
//     if(str.length === 1) return true
//     return str[0] === str[str.length - 1] ? isPalindrome(str.slice(1,str.length - 1)) : false
// }
function isPalindrome(str){
    if(str.length <= 1) return true
    return str[0] === str[str.length - 1] && isPalindrome(str.slice(1, -1))
}
// log(isPalindrome(str));

function curry(fn){
    return function curried(...preArg){
        if(preArg.length >= fn.length) return fn(...preArg)
        return function(...args){
            return curried(...preArg,...args)
        }
    }
}

function pipe(...Fun){
    return function piped(arg){
        return Fun.reduce( (pre,cur) => cur(pre),arg)
    }
}
const myTrim1 = (str) => String.prototype.trim.call(str)
const replace = (str) => String.prototype.replace.call(str,'e','E')

const pipedFun = pipe(myTrim1,replace,console.log)
// pipedFun('  hellO ')

function memorize(fn){
    let cacheMap = new Map()
    return function memorized(...arg){
        if(cacheMap.has(JSON.stringify(arg))) return cacheMap.get(JSON.stringify(arg))
        const res = fn(...arg)
        console.log('重新计算了')
        cacheMap.set(JSON.stringify(arg),res)
        return res
    }
}
function sum(a,b,c,d,e){
    return a + b + c + d + e
}
const memorizedFun = memorize(sum)
// memorizedFun(1,1,1,1,1)
// memorizedFun(1,1,1,2,1)
// memorizedFun(1,1,1,1,1)