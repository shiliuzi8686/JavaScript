const {log} = console
const inputStr = '  hello, world! ';
// 空格是占一个length ，结合刚学的utf-8编码
log(inputStr.length)


// '\u00A0' || '\u0020' || '\u3000'

log(inputStr[0] === '\u3000' || inputStr[0] === '\u00A0' || inputStr[0] === '\u0020')