module.exports = function deCapitalizeFirst( str = ""){
    
    let newStr = "";
    newStr = str.charAt(0).toLowerCase()
    for (let i = 1; i != str.length; i++){
        if (str[i] == " "){
            newStr += str[i]
            newStr += str[i + 1].toLowerCase();
            i++;
        }
        else{
            newStr += str[i]
        }
    }
    return newStr
}