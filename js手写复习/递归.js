const {log} = console
function factorial(n){
    if(n === 0) return 1
    if(n === 1) return 1
    return n*factorial(n-1)
}
// log(factorial(5))

function fabonacci(n){
    if(n === 0) return 0
    if(n === 1) return 1
    return fabonacci(n-2) + fabonacci(n-1)
}
// log(fabonacci(20))

function sum(n){
    if(n === 0) return 0
    if(n === 1) return 1
    return n + sum(n-1)
}
// log(sum(100))

function loop(n){
    while(n) { 
        console.log(n) 
        return loop(n-1)
    }
    return n
}
// log(loop(10))

function reverse(arr){
    if(arr.length === 1) return arr
    return [arr[arr.length - 1],...reverse(arr.slice(0,arr.length - 1))]
}
// log(reverse([1,2,3,4]))

function isPalindrome(str){
    if(str.length === 0) return true
    if(str.length === 1) return true
    return str[0] === str[str.length - 1] ? isPalindrome(str.substring(1,str.length - 1)) : false
}
log(isPalindrome('oklplkop'))