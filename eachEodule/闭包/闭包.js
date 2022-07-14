const {log} = console

/**
 * 抓住两个点：
 * 1.每次for循环是同步代码，setTimeOut中的是异步代码宏任务；先执行完脚本宏任务再执行微任务为一个事件循环;
 * 2.var声明的变量没有块作用域，只有函数、全局作用域；可以重复声明
 * 为什么说使用let声明每次for循环都创建了一个变量--》我感觉应该还是只有一个变量
 * 只不过let和var声明的变量的作用域不同，一个是块另一个是函数或全局
 * 作用域不同的话，会影响每次怎么查找变量的值
 */
// 依次输出10
// for(var i = 0;i < 10;i++){
//     setTimeout(function(){
//         log(i)
//     })
// }

// setTimeout(function(){
//     log('-----')
// },1000)

// 一秒后依次输出undefined ？？？
// for(var i = 0;i < 10;i++){
//     // 没有给它传参，但这个不会根据作用域链向外查找吗？？？
//     // 函数的形参变量是不会通过作用域链向外查找的，只能通过调用函数时传入实参来赋值
//     setTimeout(function(i){
//         log(i)
//     },1000)
// }

// 立即自调用函数每次直接传入当前的i值，存在闭包，两种方式都是：一秒后依次输出0-9
for(var i = 0;i < 10;i++){
    (
        function(i){
            // setTimeout(function(i){
            //     log(i)
            // },1000,i)
            setTimeout(function(){
                log(i)
            },1000)
        }
    )(i)
}

// setTimeout(function(){
//     log('-----')
// },1000)

// 1秒后依次输出0-9
// for(var i = 0;i < 10;i++){
//     setTimeout(function(i){
//         log(i)
//     },1000,i)
// }

// 这个会通过作用域链查找,每次查找到的值是同步代码执行完后的那个i值，值为10
// for(var i = 0;i < 10;i++){
//     setTimeout(function(){
//         log(i)
//     },1000)
// }

// 0-9
// for(let i = 0;i < 10;i++){
//     setTimeout(function(){
//         log(i)
//     },1000)
// }