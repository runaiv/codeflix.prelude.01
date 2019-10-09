module.exports = function indexOf( str = "", search, fromIndexopt = 0){
    for(let i = 0; i != str.length; i++){
        if(search == str[i]){
            return i
        }
}
return -1
}