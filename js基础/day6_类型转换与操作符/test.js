const {log} = console
const obj = {
    ok:'数据正常'
}
log(Reflect.ownKeys(obj))

// let a = {
//     i:0,
//     toString(){
//         this.i++
//         return this.i
//     }
// }

// let a = []
// a.i = 0
// a.toString = function (){
//     this.i++
//     return this.i
// }
// a.valueOf = function (){
//     this.i++
//     return this.i
// }

// log(a == 1 && a == 2 && a == 3)

/**
 * 前后缀作为语句：
 *   使得 i 的为 i+1。
 * 作为表达式：
 *   前缀作为表达式：
 *    值为：i+1
 *   后缀作为表达式：
 *    值为：i
*/
// for循环里都是作为语句使用的
for(let i = 0;i < 5;i++){
    // log(i) //0,1,2,3,4
}
for(let i = 0;i < 5;++i){
    // log(i) //0,1,2,3,4
}
// 我打印出来没有 symbol.toStringTag 方法诶？？？
// log(...Reflect.ownKeys(Date)) //length name prototype now parse UTC

// 以下3个方法存在任意一个都可以
const a = {
    i: 1,
    [Symbol.toPrimitive](hint) {
      switch (hint) {
        case 'number':
            log(this.i)
          return a.i;
        case 'string':
          return '[object Object]';
        default:
            log(this.i)
          return a.i++;
      }
    },
    // valueOf() {
    //   return a.i++;
    // },
    // toString() {
    //   return a.i++;
    // },
  };
  
  console.log(a == 1 && a == 2 && a == 3);
  // -> true