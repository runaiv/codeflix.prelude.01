module.exports = function subStr( str = "", start, length = str.endOfString){
    return str.slice(start, (start+length))
}