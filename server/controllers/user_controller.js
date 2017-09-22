const friends = require('../models/robots');

module.exports = {
    read: (req, res, next) => {
        res.status(200).send( req.session.user );
    }
};