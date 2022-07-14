// const {log} = console

for(var i = 0;i < 10;i++){
    setTimeout(function(){
        console.log(i) //10
    })
}

for(var i = 0;i < 10;i++){
    setTimeout(function(i){
        console.log(i) //undefined
    },1000)
}

for(var i = 0;i < 10;i++){
    (
        function(i){
            // setTimeout(function(i){
            //     console.log(i)
            // },1000,i)
            setTimeout(function(){
                console.log(i)
            },1000) //0-9
        }
    )(i)
}

for(var i = 0;i < 10;i++){
    setTimeout(function(i){
        console.log(i) //0-9
    },1000,i) 
}

for(var i = 0;i < 10;i++){
    setTimeout(function(){
        console.log(i) //10
    },1000)
}

for(let i = 0;i < 10;i++){
    setTimeout(function(){
        console.log(i) //0-9
    },1000)
}