module.exports = function insert( str = "", toInsertopt='', positionopt = 0){
   //return str.charAt(positionopt) = str.concat(toInsertopt)
   let newStr = ''
   for(let i = 0; i <= str.length; i++){
      if(i == positionopt){
         newStr = str.slice(0, positionopt) + toInsertopt + str.slice(positionopt +1)
      }
   }
   return newStr
}