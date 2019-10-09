module.exports = function endsWith( str = "", end, positionopt = str.length){
    let newStr = ''
    newStr = str.slice(((str.length) - end.length), str.length)
    if( newStr == end){
        return true
    }
    else
        return false 
}