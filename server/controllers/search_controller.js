const friends = require('../models/robots');

module.exports = { 
    search: (req, res, next) => {
        const { category } = req.query;
        if (!category) {
            res.status(200).send( friends );
        } else {
            const filteredFriends = friends.filter( friends => friends.category === category);
            res.status(200).send( filteredFriends );
        }
    }
};