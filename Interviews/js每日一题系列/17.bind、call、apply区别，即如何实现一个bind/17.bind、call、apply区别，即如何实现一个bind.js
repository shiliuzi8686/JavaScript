//场景：需要改变this指向（改代码需在浏览器里执行，使用node执行时，顶级对象应该不是window）
var name="lucy";
var obj={
    name:"martin",
    say:function () {
        console.log(this.name);
    }
};
// obj.say(); //martin，this指向obj对象
// setTimeout(obj.say.bind(obj),0) //martin,this指向obj对象
// setTimeout(obj.say,0); //lucy，this指向window对象


/**
 * bind
 */
function fn(...args){
    console.log(this,args);
}
let obj = {
    myname:"张三"
}

const bindFn = fn.bind(obj); // this 也会变成传入的obj ，bind不是立即执行需要执行一次
bindFn(1,2) // this指向obj
fn(1,2) // this指向window