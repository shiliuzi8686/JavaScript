/** 一个字符串值，默认在该串中空串的索引值为0*/

let stringValue = "hello ";
let result = stringValue.concat("world");
// console.log(result); // "hello world"
// console.log(stringValue); // "hello"

let stringValue1 = "hello world";
// console.log(stringValue1.slice(3)); // "lo world"
// console.log(stringValue1.substring(3)); // "lo world"
// console.log(stringValue1.substr(3)); // "lo world"
// console.log(stringValue1.slice(3, 7)); // "lo w"
// console.log(stringValue1.substring(3,7)); // "lo w"
// console.log(stringValue1.substr(3, 7)); // "lo worl"

let stringValue2 = " hello world ";
// let trimmedStringValue = stringValue2.trim();
// let trimmedStringValue = stringValue2.trimLeft();
let trimmedStringValue = stringValue2.trimRight();
// console.log(stringValue2); // " hello world "
// console.log(trimmedStringValue); // "hello world"

let stringValue3 = "na ";
let copyResult = stringValue3.repeat(2)
// console.log(copyResult) // na na 

// 在字符串前面补字符值,参数一：目标字符串长度，参数二：要补的字符
let stringValue4 = "foo";
// console.log(stringValue4.padStart(6)); // "   foo"
// console.log(stringValue4.padStart(9, ".")); // "......foo"


// 在字符串后面补字符值
let stringValue4_ = "foo";
console.log(stringValue4_.padEnd(6)); // "foo   "
console.log(stringValue4_.padEnd(9, ".")); // "foo......"

let stringValue5 = "hello world";
// console.log(stringValue5.toUpperCase()); // "HELLO WORLD"
// console.log(stringValue5.toLowerCase()); // "hello world"

let message = "abcde";
// console.log(message.charAt(2)); // "c"

let stringValue6 = "hello world";
// console.log(stringValue6.indexOf("o")); // 4
// console.log(stringValue6.indexOf("")); // 0 =====> 一个字符串中使用indexOf来监测空串，返回结果的索引是0，表示包含空串，且索引为0

let message1 = "foobarbaz";
// console.log(message1.startsWith("")); // true  =====> 一个字符串中使用startsWithf来监测是否以空串开头，返回结果为true
// console.log(message1.startsWith("foo")); // true
// console.log(message1.startsWith("bar")); // false
// console.log(message1.includes("")); // true  =====> 一个字符串中使用includes来监测是否包含空串，返回结果为true
// console.log(message1.includes("bar")); // true
// console.log(message1.includes("qux")); // false


let str = "12+23+34"
let arr = str.split("+") // [12,23,34]
// console.log(arr)// [12,23,34]

let text = "cat, bat, sat, fat";
let pattern = /.at/;
let matches = text.match(pattern);
// console.log(matches[0]); // "cat"index

let text1 = "cat, bat, sat, fat";
let pos = text1.search(/at/);
// console.log(pos); // 1

let text2 = "cat, bat, sat, fat";
// let result1 = text2.replaceAll("at", "ond");
// console.log(result1); // "cond, bond, sond, fond"

