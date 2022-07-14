(
    function(window){
        const PENDING = 'pending'
        const RESOLVED = 'resolved'
        const REJECTED = 'rejected'
        function myPromise (excutor) {
            const self = this
            // Promise实例对象应该有的属性和方法
            self.data = undefined
            self.status = PENDING
            self.callbacks = []
            function resolve (value) {
                // 状态已经改变过，不能再改变
                if(self.status !== PENDING){
                    return
                }

                // 改变Promise实例对象的状态
                self.status = RESOLVED

                // 保存成功的数据
                self.data = value

                // 若指定了成功的回调，则执行成功的回调函数
                if(self.callbacks.length){
                    // self.callbacks.forEach( callback => {
                    //     setTimeout( () => {
                    //         callback.onResolved(value)
                    //     })
                    // })
                    setTimeout( () => {
                        self.callbacks.forEach( callback => {
                            callback.onResolved(value)
                        })
                    })
                }
            }
            function reject (reason) {
                // 状态已经改变过，不能再改变
                if(self.status !== PENDING){
                    return
                }

                // 改变Promise实例对象的状态
                self.status = REJECTED

                // 保存成功的数据
                self.data = reason

                // 若指定了成功的回调，则执行成功的回调函数
                if(self.callbacks.length){
                    // self.callbacks.forEach( callback => {
                    //     setTimeout( () => {
                    //         callback.onRejected(reason)
                    //     })
                    // })
                    setTimeout( () => {
                        self.callbacks.forEach( callback => {
                            callback.onRejected(reason)
                        })
                    })
                }
            }
            try{
                excutor(resolve,reject)
            } catch (error) {
                // throw new Error(error)
                reject(error)
            }
        }

        myPromise.prototype.then = function (onResolved,onRejected) {
            const self = this
            // then 方法返回的肯定是一个新Promise实例对象
            return new myPromise((resolve,reject) => {
                // Promise状态改变后，进行的操作
                function handle (callback) {
                    try{
                        // 传入结果数据，执行当前Promise的成功或失败的回调函数
                        const result = callback(self.data)
                        // 根据成功或失败的执行结果确定 then方法 返回的新Promise的状态
                        // 1.成功或失败的回调函数执行结果为一个Promise实例
                        if(result instanceof myPromise){ //注意：这里可能会牵扯到几个Promise实例，首先当前的Promise ，然后是then指定的成功或失败的回调函数可能会return一个Promise，最后是then()方法本身会return一个Promise
                            // 当前Promise的成功的回调函数执行的结果是一个Promise实例对象
                            // 现在要决定return的新Promise的状态，这个状态就应该由当前Promise的成功或失败的回调函数返回的Promise的状态来决定
                            // 回调函数返回的Promise相当于是插在了 当前的Promise和要return的新的Promise之前的
                            // 而回调函数返回的Promise状态的改变是通过开发者写代码时调用resolve或rejected函数决定的，若没有调用则回调函数返回的Promise的状态就不会改变，即使指定了它的then的回调也不会执行
                            // 而return的新的Promise的状态是由回调函数执行结果的返回的Promise的状态决定的
                            // 当回调函数执行结果的返回的Promise的状态改变后，拿到结果数据传给return的新的Promise的resolve或rejected函数。
                            // 此时回调函数执行结果返回的Promise中的异步操作的结果数据就巧妙地传给了return的新的Promise，作为了新的Promise的成功或失败的结果数据
                            // 并且回调函数执行结果返回的Promise的成功或失败的状态决定了return的新的Promise的成功或失败的状态
                            // 而回调函数执行结果返回的Promise的成功或失败的状态是开发者决定的，当它成功时，就会将成功的数据作为下面的then方法的成功回调的参数并执行改成功的回调，而这个成功的回调是return的新的Promise的改变状态的resolve函数，这样就实现了return的新的Promise的状态和上一个Promise的状态同步并且结果数据就是上一个Promise的结果数据
                            // 这样当我们在 then 方法的回调函数中想再继续执行下一个异步操作的时候，这个异步操作的我们需要使用一个Promise实例进行封装，因此在then()方法指定的回调中就会return一个Promise来封装这个异步操作
                            // 指定的回调中就会return的Promised的状态决定了这个 then() 方法return的新的Promise的状态
                            result.then(resolve,reject)
                        } else {
                            // 2.成功或失败的回调函数是一个非Promise的数据，则 return 的新Promise状态为成功，结果数据为当前Promise的回调函数的执行结果
                            resolve(result)
                        }
                    } catch (error) {
                        // 3.成功或失败的回调执行出错，则return的新Promise状态为失败，结果数据为当前Promise的回调函数执行失败的错误信息
                        reject(error)
                    }
                }
                // then方法指定回调后，根据Promise的状态进行对应的操作
                if(self.status === RESOLVED) {
                    // handle(onResolved)
                    setTimeout(()=>{
                        handle(onResolved)
                    })
                }
                if(self.status === REJECTED) {
                    // handle(onRejected)
                    setTimeout(()=>{
                        handle(onRejected)
                    })
                }
                if(self.status === PENDING) {
                    self.callbacks.push({
                        // onResolved,
                        // onRejected
                        onResolved () {
                            handle(onResolved)
                        },
                        onRejected () {
                            handle(onRejected)
                        }
                    })
                }
            })
        }
        window.myPromise = myPromise
        return myPromise
    }
)(window)