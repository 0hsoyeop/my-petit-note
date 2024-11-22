const httpStatus = require("http-status-codes");

exports.pageNotFoundError = (req, res) => {
    let errorCode = httpStatus.StatusCodes.NOT_FOUND;
    res.status(errorCode);
    res.sendFile('C:/study/my-petit-note/public/404.html');
};

exports.internalServerError = (req, res) => {
    let errorCode = httpStatus.StatusCodes.INTERNAL_SERVER_ERROR;
    res.status(errorCode);
    res.sendFile('C:/study/my-petit-note/public/404.html');
};