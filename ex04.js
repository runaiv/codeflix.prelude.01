module.exports = function capitalizeFirst( str = ""){
        return str.charAt(0).toUpperCase() + str.slice(1, str.length).toLowerCase();
    }