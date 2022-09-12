//内部函数直接调用，外部函数对象调用
let obj = {}
function objFn(){
    console.log(`obj对象调用的ObjFn`,this) //obj
    function objFnInnerFn (){
        console.log(`objFn函数内直接调用的objFnInnerFn`,this) //window
    }
    objFnInnerFn()
}
obj.objFn = objFn
obj.objFn()