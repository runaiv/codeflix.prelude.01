module.exports = function trim( str = "", whitespaceopt = ' '){
    let newStr = ''
    let final = ''
    for (let i = 0; i != str.length; i++){
        if(str[i] != whitespaceopt){
            newStr = str.slice(i, str.length)
            break
        }
    }
    for (let j = newStr.length; j != 0; j--){
        if(whitespaceopt === ' ' && str[j] != whitespaceopt){
            final = newStr.slice(0, j)
            break
        }
        else if(str[j] != whitespaceopt){
            final = newStr.slice(0, j - 1)
            break
        }
    }
    return final
}