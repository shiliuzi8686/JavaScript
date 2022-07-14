const {log} = console
/**
 * 求解数组中每个元素的和
 */
function sum(array,index){
    if(index == 0) return array[0]
    index--
    return array[index] + sum(array,index)
}
log(sum([1,2,3,4,5],[1,2,3,4,5].length - 1))
