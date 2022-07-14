const {log} = console
let arr = [1,2,3,4,5]
// log(arr[-2]) //undefined
// log(arr)
// log(arr.length)

// 转换方法
// log(arr.toString())
// log(arr.valueOf())
// log(arr)

// 排序方法
let arr1 = [1,2,3,4,5,10]
// arr1.sort()
// log(arr1) //[ 1, 10, 2, 3, 4, 5 ]

// arr1.sort((value1,value2) => {
//     if(value1 > value2) return -1 //降序
// })
// log(arr1) //[ 1, 10, 2, 3, 4, 5 ]

// 操作方法
// concat()



// 断言函数
const people = [
    {
        name:'hhh'
    },
    {
        name:'jane'
    },
    222
]
let res = people.slice()
res[0].name = 'hhh changed'
// log(res)
// log(people)
log(res.keys())
// log(people.find((item) => item.name==='jane'))      //{ name: 'jane' }
// log(people.findIndex((item) => item.name==='jane')) //1