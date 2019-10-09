module.exports = function last( str = "", length){
    return str.slice((str.length-length), str.length)
}