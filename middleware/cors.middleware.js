const cors = (req, res, next) => {
    req.header("Access-Control-Allow-Origin", "*");
    req.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    req.header("Access-Control-Allow-Headers", "Content-Type");
    next();
}

module.exports = cors;