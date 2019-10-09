module.exports = function splice( str = "", start, deleteCountopt = str.length - start, toAddopt=''){
    let newStr = ''
    if(start < 0){
        newStr = (str.slice(0, str.length - deleteCountopt) + toAddopt)
    }
    else {
        newStr = (toAddopt + str.slice(deleteCountopt))
    }
    return newStr
}