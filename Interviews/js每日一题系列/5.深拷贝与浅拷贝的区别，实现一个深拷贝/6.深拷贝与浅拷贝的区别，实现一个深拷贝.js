/**
 * 浅拷贝
 */
//简单实现一个浅拷贝
function shallowClone(obj){
    const newObj = {}
    for(let prop in obj){
        //这里应该使用Object上真正的hasOwnProperty方法,更安全
         //if(Object.hasOwnProperty.call(obj,prop))
        if(obj.hasOwnProperty(prop)){
            newObj[prop] = obj[prop]
        }
    }
    return newObj
}
let obj = {a:1,b:{c:2,d:{d:3}}}
let newObj = shallowClone(obj)
// console.log(obj,newObj)

//浅拷贝示例：Object.assign
let target = {name:'ju',age:18};
let source = {state:'single'}
let msg = {school:'taylor'}
let result = Object.assign(target,msg,source) 
// console.log(target,target === result)// { name: 'ju', age: 18, school: 'taylor', state: 'single' } true

//浅拷贝示例：slice()
const fxArr = ["One", "Two", "Three"]
const fxArrs = fxArr.slice(0)
fxArrs[1] = "love";
// console.log(fxArr) // ["One", "Two", "Three"]
// console.log(fxArrs) // ["One", "love", "Three"]

//浅拷贝示例：concat()
const fxArr1 = ["One", "Two", "Three"]
const fxArrs1 = fxArr.concat()
fxArrs1[1] = "love";
// console.log(fxArr1) // ["One", "Two", "Three"]
// console.log(fxArrs1) // ["One", "love", "Three"]

const fxArr2 = ["One", "Two", "Three"]
const fxArrs2 = [...fxArr]
fxArrs2[1] = "ook";
// console.log(fxArr2) // ["One", "Two", "Three"]
// console.log(fxArrs2) // ['One', 'ook', 'Three']



/**
 * 深拷贝
 */

// JSON.stringify()
let obj1 = {
    a:'111',
    b:4,
    c:{
        msg:'ok'
    },
    d:false,
    e:null,
    f:undefined,
    g:function(){
        console.log('hhh')
    },
    [Symbol('h')]:'okk',
    i:Symbol('kko')
}
const obj2 = JSON.parse(JSON.stringify(obj1))
// console.log(obj1)
// console.log(obj2)

//循环递归
function deepClone(obj,hash = new WeakMap()){
    if(obj === null) return obj //如果是 null 或者 undefined 则不进行拷贝操作
    if(obj instanceof Date) return new Date(obj)
    if(obj instanceof RegExp) return new RegExp(obj)
    //可能是对象或者普通的值，如果是函数的话 不需要深拷贝
    if(typeof obj !== "object") return obj
    //是对象的话就要进行深拷贝
    if(hash.get(obj)) return hash.get(obj) //???
    let cloneObj = new obj.constructor()
    // 找到的是所属类原型上的 constructor ，而原型上的 constructor 指向的是当前类本身
    hash.set(obj,cloneObj)
    for(let key in obj){
        if(obj.hasOwnProperty(key)){
            //实现一个递归拷贝
            cloneObj[key] = deepClone(obj[key],hash)
        }
    }
    return cloneObj
}
