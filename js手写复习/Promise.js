// catch
Promise.prototype.catch = function (onRejected){
    return this.then(undefined,onRejected)
}

Promise.resolve = function(value){
    return new Promise((resolve,reject) => {
        if(value instanceof Promise){
            value.then(resolve,reject)
        } else {
            resolve(value)
        }
    })
}

Promise.reject = function(value){
    return new Promise((resolve,reject) => {
        reject(value)
    })
}

Promise.all = function(promises){
    const values = new Array(promises.length)
    const resolvedCount = 0
    return new Promise((resolve,reject) => {
        promises.forEach( (promise,index) => {
            Promise.resolve(promise).then(
                value => {
                    resolvedCount++
                    // 按照传入的Promsie的顺序排列Promise的结果（若想按照Promise状态改变的先后，则values.push()）
                    values[index] = value
                    if(resolvedCount === Promise.length){
                        resolve(values)
                    }
                },
                reason => {
                    reject(reason)
                }
            )
        })
    })
}

// 返回一个Promise，其结果由第一个完成的Promise决定
Promise.race = function (Promises) {
    return new Promise( (resolve,reject) => {
        Promises.forEach( p => {
            Promise.reject(p).then(
                value => {
                    resolve(value)
                },
                reason => {
                    reject(reason)
                }
            )
        })
    })
}