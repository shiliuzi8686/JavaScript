const {log} = console
log('1 || 2', 1 || 2 ) // "1 || 2" 1
log('1 && 2', 1 && 2 ) // "1 && 2" 2
function huo (){
    if(1) return 1
}
function yu (){
    if(1) return 2
}
log('huo',huo()) //"huo" 1
log('yu',yu())   //"yu" 1
// 可以看出 || 和 && 操作符，确实分别对应着 huo,yu函数