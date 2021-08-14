const entrada = require('prompt-sync')({
    sigint: true
})


    const string=(a) =>{
        return entrada(a)
    }
    const number=(a) =>{
        return Number(entrada(a))
    }

    
    module.exports = {
        string, number
    }
