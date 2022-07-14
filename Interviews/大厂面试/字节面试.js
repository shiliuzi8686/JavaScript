setTimeout(function(){
    console.log('a')
},0)
new Promise( function(resolve){
for(let i = 0; i < 10000;i++){
    if (i==99) console.log('b')
    if (i==9999) console.log('c') & resolve('d') 
}
})
.then( res => {
console.log(res)
})
console.log('e')