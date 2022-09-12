const { log } = console;

Function.prototype.myBind = function (thisArg,...PreArgs){
    return (...args) => {
        return this.call(thisArg,...PreArgs,...args)
    }
}

function logInfo(a, b) {
    log(a, b);
    log(this)
    log(this.valueOf())
}
  
const bindedLogInfo = logInfo.myBind('thisArg', 1, 2);
bindedLogInfo(3, 4);
// -> 1 2
// -> 'thisArg'