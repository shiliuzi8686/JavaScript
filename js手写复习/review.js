function getType(value) {

}

// function myInstanceOf(instance,constructor){
//     let curProto = Object.getPrototypeOf(instance)
//     while(curProto){
//         if(curProto === constructor.prototype) return true
//         curProto = Object.getPrototypeOf(curProto)
//     }
// }

// function bigInt(bigStr1,bigStr2){
//     let sum
//     let carried = 0
//     let result = []
//     let len = bigStr1.length >= bigStr2.length ? bigStr1.length : bigStr2.length
//     for(let i = len - 1;i >= 0;i--){
//         sum = (+bigStr1[i] || 0) + (+bigStr2[i] || 0) + carried
//         carried = sum > 9 ? sum - 10 : 0
//         result.unshift(carried ? sum - 10 : sum)
//     }
//     carried ? result.unshift(carried) : result
//     return result.join('')
// }

String.prototype.myTrim = function () {
    const pattern = /^\s+|\s+$/g
    return this.valueOf().replace(pattern,'')
}

function isNumbericStr(str) {
  
}

// function deepClone(value) {
//     if(typeof value !== 'objetc' || value === 'null' || value instanceof Function) return value
//     if(!deepClone.cache) deepClone.cache = new WeakSet()
//     if(deepClone.cache.has(value)) return value
//     deepClone.cache.add(value)
//     const result = Object.create(Object.getPrototypeOf(value))
//     Object.keys().forEach( key => result[key] = deepClone(value[key]) )
//     return result
// }

function supType() {}
supType.prototype.supMethods = () =>{
    console.log('supMethods')
}
function subType() {}
subType.prototype = new supType()
subType.prototype.subMethods = () =>{
    console.log('subMethods')
}

// function supType() {}
// supType.prototype.supMethods = () =>{
//     console.log('supMethods')
// }
// function subType() {}
// subType.prototype = Object.create(Object.getPrototypeOf(supType))
// Object.defineProperty(subType.prototype,'constructor',{
//     value: SubType,
//     writable: true,
//     enumerable: false,
//     configurable: true,
// })
// subType.prototype.subMethods = () =>{
//     console.log('subMethods')
// }

function supType(name) {
    this.name = name
}
function subType(name,hobby) {
    supType.call(this,name)
    this.hobby = hobby
}
const supInstance = new subType('名字','爱好')


// function supType(name) {
//     this.name = name
// }
// supType.prototype.supMethods = () => {
//     console.log('supMethods')
// }
// function subType(hobby) {
//     supType.call(this)
//     this.hobby = hobby
// }
// subType.prototype = new subType()
// subType.prototype.subMethods = () =>{
//     console.log('subMethods')
// }


