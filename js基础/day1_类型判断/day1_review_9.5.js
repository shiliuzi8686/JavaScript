const {log} = console
function getTypeByTypeof(value){
    return typeof value
}
function getTypeByInstance(instance,proto){
    return instance instanceof proto
}
function getTypeByObjectToString(value){
    return Object.prototype.toString.call(value).slice(8,-1)
}
const typeofMap = [undefined,null,1,'2',false,1n,Symbol('测试'),{}].map(getTypeByTypeof)
const objectToStringMap = [undefined,null,1,'2',false,1n,Symbol('测试'),{}].map(getTypeByObjectToString)

const instanceMap = [
                    [1,Number],[Object(1),Number],
                    ['2',String],[Object('2'),String],
                    [false,Boolean],[Object(false),Boolean],
                    [1n,BigInt],
                    [Object(1n),BigInt],
                    [Symbol('测试'),Symbol],
                    [Object(Symbol('测试')),Symbol],
                    [{},Object]
                ].map( ([instance,proto]) => getTypeByInstance(instance,proto) )
log(typeofMap) // ['undefined', 'object','number','string','boolean','bigint','symbol','object']
log(objectToStringMap) // ['Undefined','Null','Number','String','Boolean','BigInt','Symbol','Object']
log(instanceMap) // [false,true,false,true,false,true,false,true,false,true,true]


// log(1 instanceof Number) //基础类型，没有隐式原型属性
// log(Object(1) instanceof Number) //对象类型，有隐式原型属性

// log(Object(undefined) instanceof undefined) // 报错，Uncaught TypeError: Right-hand side of 'instanceof' is not an object
// // undefined是一个全局属性，参考MDN

// 带思考：
// object必须是对象类型，才能有隐式原型属性
// constructor是大写形式
function myInstanceOf(object,constructor){
    let curProto = Object.getPrototypeOf(object)
    // while(curProto !== constructor && curProto !== null){
    //     curProto = Object.getPrototypeOf(curProto)
    // }
    // if(curProto === null) return false
    // return true
    while(curProto){ //只要不是null,就一直循环进行的工作
        if(curProto === constructor) return true // 正确的情况在这里返回
        curProto = Object.getPrototypeOf(curProto) //当前不对，继续
    }
    // 到这，说明不是
    return false
}