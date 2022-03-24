function errorHandler(error, req, res, next) {
    console.log(error);
    let status, message
    switch (error.name) {
        case "Error":
            status = 400;
            message = "Bad Request";
        case "getRouteError":
            status = 400;
            message = error.message;
        case "unableToFindFuelEfficiency":
            status = 404;
            message = "Unable To Find Fuel Efficiency"
        default:
            status = 500;
            message = "Internal Server Error"
            break;
    }
    res.status(status).json({
        message
    })
}
module.exports = errorHandler