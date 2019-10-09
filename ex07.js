module.exports = function snakeCase( str = ""){
    let finish

    if(str.match(/-/))
    //\s
    {
        finish = str.replace(/(^-|-$)/g, "")
    }
    
    else if (str.match(/([A-Z])/g))
    {
        finish = str.replace(/([A-Z])/g, " $1")
        finish = finish.replace(/ /, "")
        finish = finish.replace(/ /g, "_")
    }
    else
    {
        finish = str.replace(/ /g, "_")
    }
    finish = finish.toLowerCase()

    return finish
}