function bigInt(bigStr1,bigStr2){
    let sum
    let carry = 0
    const result = []
    bigStr1 = bigStr1.split('').reverse()
    bigStr2 = bigStr2.split('').reverse()
    let length = bigStr1.length >= bigStr2.length ? bigStr1.length : bigStr2.length
    for(let i = 0;i < length;i++){
        sum = (Number(bigStr1[i]) || 0) + (Number(bigStr2[i]) || 0) + carry
        carry = sum > 9 ? 1 : 0
        result.unshift(carry ? (sum - 10) : sum)
    }
    if(carry) result.unshift(carry)
    return result.join('')
}
const str1 = '123'
const str2 = '45600'
console.log(bigInt(str1,str2))