const { log } = console;
Array.prototype.myreduce = function (reducer,initialValue){
    const args = this.slice()
    if(initialValue) args.unshift(initialValue)
    if(args.length === 1) throw new TypeError('empty array')
    if(args.length === 1) return args[0]
    const result = reducer.call(this,arg[0],arg[1])
    return [result,...args.slice(2)].reduce(reducer)
}
log([1, 2, 3].reduce((pre, cur) => pre + cur, 10));