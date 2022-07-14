let arr = ['a','b']
let res = arr.push('c','d')
// console.log(res); //4
// console.log(arr); // [ 'a', 'b', 'c', 'd' ]

let arr1 = ['1','2']
let res1 = arr1.unshift('3','4')
// console.log(res1); //4
// console.log(arr1); //[ '3', '4', '1', '2' ] 

// splice刪除元素
let arr2 = ['1','2','3','4']
let res2 = arr2.splice(2,1)//删除元素 '3'
// console.log(res2); //[ '3' ]
// console.log(arr2); //[ '1', '2', '4' ]
// splice新增元素
let arr3 = ['a','b','c','d']
let res3 = arr3.splice(2,0,'1','2','3') //在index为2处新增元素 'ok'
// console.log(res3); //[]
// console.log(arr3); //[ 'a', 'b', '1', '2', '3', 'c', 'd' ]

let arr4 = ['a','b','c','d']
let res4 = arr4.concat(2,0,'1','2','3',['哈','嘿'],{mag:'ok'})
// console.log(res4); //[ 'a', 'b', 'c', 'd', 2, 0, '1', '2', '3', '哈', '嘿', { mag: 'ok' } ]
// console.log(arr4); //[ 'a', 'b', 'c', 'd' ]

let arr5 = ['red','green','blue']
let res5 = arr5.pop()// 取得最后一项
// console.log(res5); //'blue'
// console.log(arr5); //[ 'red', 'green' ]

let arr6 = ['red','green','blue']
let res6 = arr6.shift()// 取得第一项
// console.log(res6); //'red'
// console.log(arr6); //[ 'green', 'blue' ]

let arr7 = ['red','green','blue']
let res7 = arr7.slice()
// console.log(res7); //[ 'red', 'green', 'blue' ]
// console.log(arr7); //[ 'red', 'green', 'blue' ]

let arr8 = ['1','2','3','4','5','6','7','8']
let res8 = arr8.slice(2)
// console.log(res8); //[ '3', '4', '5', '6', '7', '8' ]
// console.log(arr8); //[ '1', '2', '3', '4', '5', '6', '7', '8' ]

let arr9 = ['1','2','3','4','5','6','7','8']
let res9 = arr9.splice(2,1,'ok') // 将下标为3的元素分别改为:'ok'
// console.log(res9); //[ '3' ]
// console.log(arr9); //[ '1', '2', 'ok', '4', '5', '6', '7', '8' ]

let arr8_ = '[object map]'
// let res8_ = arr8_.slice(8,9)
let res8_ = arr8_.slice(8,-1) //传入负数代表字符串的后面开始， -1 代表截止到-1（-1位置出现在返回的字符串中，相对而言-0则被剔除了）
// console.log(res8_); //[ '3', '4', '5', '6', '7', '8' ]
// console.log(arr8_); //[ '1', '2', '3', '4', '5', '6', '7', '8' ]

let arr10 = ['1','2','3','4','5','6','7','8']
let res10 = arr10.splice(2) 
// console.log(res10); //[ '3', '4', '5', '6', '7', '8' ]
// console.log(arr10); //[ '1', '2' ]

let arr11 = ['1','2','3','4','5','6','7','8']
let res11 = arr11.splice() 
// console.log(res11); //[]
// console.log(arr11); //[ '1', '2', '3', '4', '5', '6', '7', '8' ]

let arr12 = ['1','2','3','4','5','6','7','8',null]
let res12 = arr12.indexOf(null) 
// console.log(res12); //8
// console.log(arr12); //['1','2','3','4','5','6','7','8',null]

let arr13 = ['1','2','3','4','5','6','7','8',null]
let res13 = arr13.includes(null) 
// console.log(res13); //true
// console.log(arr13); //['1','2','3','4','5','6','7','8',null]

let arr14 = ['1','2','3','4','5','6','7','8',null]
let res14 = arr14.find( (element,index,array) => element === '5') 
// console.log(res14); //5
// console.log(arr14); //['1','2','3','4','5','6','7','8',null]

//探索数组的 find 方法：
var students = [
    { id: 1, name: '张三', age: 18, sex: 0, like: '睡觉' },
    { id: 2, name: '李四', age: 35, sex: 0, like: '读书' },
    { id: 3, name: '王五', age: 60, sex: 0, like: '下棋' }
  ]
var stu = students.find(function(item){
    return item.id == 3
  })
//   console.log(stu) 
  // 打印结果为{ id: 3, name: '王五', age: 60, sex: 0, like: '下棋' }
  stu.aaa = 100
//   console.log(stu)
  //打印结果为{ id: 3, name: '王五', age: 60, sex: 0, like: '下棋',aaa:100 }
  
  //然后再打印students
//   console.log(students)
  //打印结果为
  /*
  [
    { id: 1, name: '张三', age: 18, sex: 0, like: '睡觉' },
    { id: 2, name: '李四', age: 35, sex: 0, like: '读书' },
    { id: 3, name: '王五', age: 60, sex: 0, like: '下棋',aaa:100 }
  ]
  */

let arr15 = ['1','2','3','4','5','6','7','8']
let res15 = arr15.reverse()
// console.log(res15); //[ '8', '7', '6', '5', '4', '3', '2', '1' ]
// console.log(arr15); //[ '8', '7', '6', '5', '4', '3', '2', '1' ]

// 这里的value1、value2拿到的是数组元素的每个元素，可能是一个对象，也可能直接就是一个数字或者字符串
let compare = (value1,value2) => {
  return value1 - value2 //升序（前-后）
  // return value2 - value1 //降序
}
let arr16 = [4,2,8,1,7,6,5,3]
let res16 = arr16.sort(compare)
// console.log(res16); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]
// console.log(arr16); //[ 1, 2, 3, 4, 5, 6, 7, 8 ]

// 将数组拼接成字符串
let arr17 = ['1','2','3','4','5','6','7','8']
let res17 = arr17.join('*')
// console.log(res17); //'1*2*3*4*5*6*7*8'
// console.log(arr17); //[ '1', '2', '3', '4', '5', '6', '7', '8' ]

let arr18 = ['1','2','3','4','5','6','7','8']
let res18 = arr18.some((item,index,arry) => item === '10' )
// console.log(res18); //true
// console.log(arr18); //[ '1', '2', '3', '4', '5', '6', '7', '8' ]

let arr19 = ['1','2','3','4','5','6','7','8']
let res19 = arr19.every((item,index,arry) => Number(item) <= 10 )
// console.log(res19); //true
// console.log(arr19); //[ '1', '2', '3', '4', '5', '6', '7', '8' ]

//高阶函数的高级用法示例：传入第二个参数
const objecter = {
  obj:function(key,value){
    // console.log(`当前的索引和值：${key}-${value}`)
  }
}
let arr20 = ['1','2','3','4','5','6','7','8']
let res20 = arr20.forEach(function(item,index,arry){
  // console.log(this);
  this.obj(index,item)
  return Number(item) <= 10 
},objecter);
// console.log(res20); //undefined
// console.log(arr20); //[ '1', '2', '3', '4', '5', '6', '7', '8' ]

let arr21 = ['1','2','3','4','5','6','7','8']
let res21 = arr21.map( (item,index,arry) => {
  if(Number(item) <= 5) item += 'chg-' 
  return item
})
// console.log(res21); //true
// console.log(arr21); //[ '1', '2', '3', '4', '5', '6', '7', '8' ]



