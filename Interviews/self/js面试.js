
/**
 * 数据类型转换
 */

/** 空字符串转布尔值为false */
let str = ""
strRes = Boolean(str)
console.log(strRes)  //false

/** 数组转数字 */
/** 空数组转数字返回0,存在一个元素且为数字返回的结果就是该数字 */
// let arr = []
// let arr = [5]
// let arr = [5,2]
// let arr = ['5']
let arr = ['5','2']
let res = Number(arr)
console.log(res)


/**
 * 数据类型的判断
 */
/** typeof */
 console.log(typeof 2);               // number
 console.log(typeof true);            // boolean
 console.log(typeof 'str');           // string
 console.log(typeof []);              // object     []数组的数据类型在 typeof 中被解释为 object
 console.log(typeof function(){});    // function
 console.log(typeof {});              // object
 console.log(typeof undefined);       // undefined
 console.log(typeof null);            // object     null 的数据类型被 typeof 解释为 object
 
 /** instanceof */
 console.log(2 instanceof Number);                    // false
console.log(true instanceof Boolean);                // false 
console.log('str' instanceof String);                // false  
console.log([] instanceof Array);                    // true
console.log(function(){} instanceof Function);       // true
console.log({} instanceof Object);                   // true    
// console.log(undefined instanceof Undefined);
// console.log(null instanceof Null);

/** constructor */
console.log((2).constructor === Number); // true
console.log((true).constructor === Boolean); // true
console.log(('str').constructor === String); // true
console.log(([]).constructor === Array); // true
console.log((function() {}).constructor === Function); // true
console.log(({}).constructor === Object); // true
//这里有一个坑，如果我创建一个对象，更改它的原型，constructor就会变得不可靠了
function Fn(){};
Fn.prototype=new Array();
var f=new Fn();
console.log(f.constructor===Fn);    // false
console.log(f.constructor===Array); // true 

/** Object.prototype.toString.call() */
var a = Object.prototype.toString;
console.log(a.call(2));
console.log(a.call(true));
console.log(a.call('str'));
console.log(a.call([]));
console.log(a.call(function(){}));
console.log(a.call({}));
console.log(a.call(undefined));
console.log(a.call(null));

/**
 * 事件模型
 */

/** 自定义事件 */

