module.exports = function lastIndexOf( str = "", search, fromIndexopt = 0){
    for(let i = str.length; i != 0; i--){
        if(search == str[i]){
            return i
        }
}
return  -1
}