function debounce (callback,wait){
    let timer
    return function (...args) {
      clearTimeOut(timer)
      timer = setTimeOut(callback,wait,...args)
    }
  }

const throttle = (callback, delay) => {
    let time
    return function(...args){
        const cur = Date.now()
        if(!time || Date.now() - time >= delay) {
            time = cur
            return callback(...args)
        }
    }
};