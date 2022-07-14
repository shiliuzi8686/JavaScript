//下面不是一个浅拷贝，只是地址值赋值；两个变量间的引用赋值
let obj = {
    a:1,
    b:'2',
    c:'3'
}
let cloneObj = obj
cloneObj.a = 9
console.log(cloneObj)
console.log(obj)
