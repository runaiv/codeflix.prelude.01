module.exports = function repeat( str = "", timesopt){
    let newStr = ''
    for (let n = timesopt; n != 0; n--) {
        newStr += str
    }
    return newStr
}