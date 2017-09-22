const friends = require('../models/robots');
let id = 1;

// equivalent to managing our friends like a cart of items ... 
// maybe not best way to do it?
// manipulate the array of 'friends' (from robots) associated with each req/res

module.exports = {
    read: (req, res, next) => {
        res.status(200).send( friends );
    },
    
    add: (req, res, next) => {
        const { id } = req.query.id;
        const { friends } = req.session.user;
        const index = friends.findIndex( friend => friend.id === id );
        if (index === -1) {
            const selectedFriend = friend.find( friend => friend.id == id);
            friends.push(selectedFriend);
        }
        res.status(200).send( req.session.user + ' has been added a your friend!' );
    },

    delete: (req, res, next) => {
        const { id } = req.query.id;
        const { friends } = req.session.user;
        if (selectedFriend) {
            const i = friends.findIndex( friend => friend.id == id );
            friends.splice(i, 1);
        }
        res.status(200).send( req.session.user + ' has removed a friend.' );
    }

};