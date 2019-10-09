module.exports = function trim( str = "", whitespaceopt = ' '){
    let newStr = ''
    for(let i = 0; i != str.length; i++){
        let code = str.charCodeAt(i - 1);
        if((str[i] === whitespaceopt && ((code >= 65 && code <= 90) || (code >= 97 && code <= 122) )))
        {
        }
        else
            newStr += str[i]
    }
    return newStr
}