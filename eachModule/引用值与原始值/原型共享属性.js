function sup (name){
    this.name = name
}
sup.prototype.supObj = {
    ok:"原始数据",
}
sup.prototype.code = 200

// let instance1 = new sup('instance1')
// instance1.supObj.ok = '原始数据被修改了'
// console.log(instance1)
// let instance2 = new sup('instance2')
// console.log(instance2)

// let instance3 = new sup('instance3')
// instance3.code = 'code被修改'
// console.log(instance3)
// let instance4 = new sup('instance4')
// console.log(instance4)

let instance5 = new sup('instance5')
instance5.__proto__.code = 'code被修改'
console.log(instance5)
let instance6 = new sup('instance6')
console.log(instance6)