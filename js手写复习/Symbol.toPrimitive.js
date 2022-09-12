const {log} = console
const obj  = {
    ok:'kkk',
    [Symbol.toStringTag](){
        return 'toStringTag万岁'
    },
    valueOf(){
        return '先访问的valueOf'
    }
}
/** 验证obj执行toString操作时，[Symbol.toPrimitive]优先级最高 */
    // obj[Symbol.toPrimitive] = function(){
    //     return '改变'
    // }
    // log(obj)
    // log(String(obj)) // '改变'

/** 验证obj执行隐式toString操作时，preferedType为string时，执行的是Object.toString()即[Symbol.toStringTag] */
// obj.prototype['toString'] = undefined
// delete obj.prototype['toString']
obj
log(obj)
// log(obj.toString())
log('toStringTag万岁' == obj) //false
log('先访问的valueOf' == obj) //true //等号就是先执行 valueOf 方法