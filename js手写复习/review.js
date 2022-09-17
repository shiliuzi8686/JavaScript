function getType(value) {

}

// function myInstanceOf(instance,constructor){
//     let curProto = Object.getPrototypeOf(instance)
//     while(curProto){
//         if(curProto === constructor.prototype) return true
//         curProto = Object.getPrototypeOf(curProto)
//     }
// }

function bigInt(bigStr1,bigStr2){
    let sum
    let carried = 0
    let result = []
    bigStr1 = bigStr1.split('').reverse()
    bigStr2 = bigStr2.split('').reverse()
    let len = bigStr1.length >= bigStr2.length ? bigStr1.length : bigStr2.length
    for(let i = 0;i <= len;i++){
        sum = (+bigStr1[i] || 0) + (+bigStr2[i] || 0) + carried
        carried = sum > 9 ? sum - 10 : 0
        result.unshift(carried ? sum - 10 : sum)
    }
    carried ? result.unshift(carried) : result
    return result.join('')
}

String.prototype.myTrim = function () {
    const pattern = /^\s+|\s+$/g
    return this.valueOf().replace(pattern,'')
}

function isNumbericStr(str) {
  
}

function deepClone(value) {
    if(Object(value) !== value || value instanceof Function) return value
    if(!deepClone.cache) deepClone.cache = new WeakSet()
    if(deepClone.cache.has(value)) return value
    deepClone.cache.add(value)
    const result = Object.create(Object.getPrototypeOf(value))
    Object.keys().forEach( key => result[key] = deepClone(value[key]) )
    return result
}

function supType() {}
supType.prototype.supMethods = () =>{
    console.log('supMethods')
}
function subType() {}
subType.prototype = new supType()
subType.prototype.subMethods = () =>{
    console.log('subMethods')
}

function supType() {}
supType.prototype.supMethods = () =>{
    console.log('supMethods')
}
function subType() {}
subType.prototype = Object.create(Object.getPrototypeOf(supType))
Object.defineProperty(subType.prototype,'constructor',{
    value: SubType,
    writable: true,
    enumerable: false,
    configurable: true,
})
subType.prototype.subMethods = () =>{
    console.log('subMethods')
}

function supType(name) {
    this.name = name
}
function subType(name,hobby) {
    supType.call(this,name)
    this.hobby = hobby
}
const supInstance = new subType('名字','爱好')


function supType(name) {
    this.name = name
}
supType.prototype.supMethods = () => {
    console.log('supMethods')
}
function subType(hobby) {
    supType.call(this)
    this.hobby = hobby
}
subType.prototype = new supType()
subType.prototype.subMethods = () =>{
    console.log('subMethods')
}


function supType(name) {
    this.name = name
}
supType.prototype.supMethods = () => {
    console.log('supMethods')
}
function subType(hobby) {
    supType.call(this)
    this.hobby = hobby
}
subType.prototype = Object.create(Object.getPrototypeOf(supType))
Object.defineProperty(subType.prototype,'constructor',{
    value:subType,
    writable:true,
    enumerable:false,
    configurable:true
})
subType.prototype.subMethods = () =>{
    console.log('subMethods')
}

function myNew(constructorFun,...args){
    const obj = Object.create(constructorFun.prototype)
    obj.call(obj,...args)
    return obj
}


// Object.deepFreeze = function deepFreeze(obj) {
//     if(Object(obj) !== obj) return obj
//     Object.keys( key => {
//         if(key instanceof Object) obj[key] = deepFreeze(obj(key))
//     })
//     return Object.freeze(obj)
// }
// Object.deepFreeze = function deepFreeze(obj) {
//     if(Object(obj) !== obj) return obj
//     Object.keys( key => {
//         if(obj[key] instanceof Object) deepFreeze(obj[key])
//     })
//     Object.freeze(obj)
//     return obj
// }


// 目标对象
function Subject() {
    this.observers = new ObserverList()
}
function ObserverList() {
    // 存的同学们的电话号码
    this.observerList = [] //给所有的实例对象添加了一个数组
}
// 观察者对象
function Observer() {
    this.update = function() {
        // ...
    }
}
ObserverList.prototype.add = function(obj){
    return this.observerList.push(obj)
}
ObserverList.prototype.count = function(){
    return this.observerList.length
}
ObserverList.prototype.get = function(index){
    if( index > -1 && index < this.observerList.length){
        return this.observerList[index]
    }
}
// 这个方法是干什么的？？？ ---》 从某个索引开始查看某个同学在通讯录中的位置
ObserverList.prototype.indexOf = function(obj,startIndex){
    var i = startIndex;
    while (i < this.observerList.length) {
        if (this.observerList[i] === obj) {
        return i;
        }
        i++;
    }
    return -1;
}
ObserverList.prototype.removeAt = function(index){
    this.observerList.splice(index,1)
}
// 目标对象新增观察者
Subject.prototype.addObserver = function(observer){
    this.observers.add(observer)
}
// 目标对象中删除某个观察者--先获得观察者的索引，然后删除
Subject.prototype.removeObserver = function(observer){
    this.observers.removeAt(this.observers.indexOf(observer, 0));
}
Subject.prototype.notify = function(context) {
    var observerCount = this.observers.count();
    for (var i = 0; i < observerCount; i++) {
        this.observers.get(i).update(context);
    }
}