function notFound(req, res, next) {

    res.status(404)

    res.json({
        errror: "Not Found",
        message: "Pagina non trovata"
    })
}

module.exports = notFound;

