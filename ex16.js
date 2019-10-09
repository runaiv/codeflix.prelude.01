module.exports = function countWords( str = "", patternopt){
    let nbWords = 0;
    for(let i = 0; i != str.length; i ++){
        let code = str.charCodeAt(i);
        let prevCode = str.charCodeAt(i - 1)
        if((str <= 90 && code >= 65) && (((str[i-1] === ' ' ) || (prevCode <= 122 && prevCode >= 97))))
        {
            nbWords++
        }
    }
    return nbWords
}