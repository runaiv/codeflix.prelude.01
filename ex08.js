module.exports = function upperTolower( str = ""){
    
    let newStr = "";
    for (let i = 0; i != str.length; i++){
        if (str[i].match(/([A-Z])/))
        {
            newStr += str[i].toLowerCase()
        }
        else if (str[i].match(/([a-z])/))
        {
            newStr += str[i].toUpperCase()
        }       
        else
            newStr += str[i]
    }
    return newStr
}