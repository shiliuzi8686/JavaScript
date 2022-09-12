String.prototype['mytrim'] = function(){
    const replacePatter = /^\s+|\s+$/g
    return this.replace(replacePatter,'')
}
let str = '   lo o '
console.log(str.mytrim().length)