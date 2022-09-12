const { log } = console;

// 是否严格模式
const isStrictMode = ( function(){
    return this
})() === undefined

Function.prototype.myCall = function(thisArg,...args){
    if(isStrictMode) throw new Error("err")
    // 直接调用
    if(thisArg == null) this(...args)
    const typeOfThisArg = typeof thisArg
    let wrapper = null //空对象，因为我们之后想把this指向属性放上去
    if(['string','boolean','number'].includes(typeOfThisArg)){
        switch (typeOfThisArg){
            case 'string':
                wrapper = String(this)
                break
            case 'boolean':
                wrapper = Boolean(this)
                break
            case 'number':
                wrapper = Number(this)
                break
        }
        wrapper.Fun = this
        return wrapper.Fun(...args)
    }
    const sym = Symbol('this')
    thisArg[sym] = this
    const result = thisArg[sym](...args)
    delete thisArg[sym]
    return result
}

this.name = 'windowName'
this.age = 'windowAge'
function test(){
    log(this)
    log(this.name)
    log(this.age)
}
let obj = {
    name:'小刘',
    age:3
}
log(test.myCall(obj))