function digaOi(request, response, next) {
    try {
        response.status(200)
            .send({message: "olá"})
    } catch(error) {
        next(error)
    }
}

function get(request,response,next){
    try {
        response.status(200)
            .send({message: "teste"})
    }catch(error) {
        next(error)
    }
}

module.exports = {
    digaOi,
    get
}