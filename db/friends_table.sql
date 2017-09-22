-- a table that tracks friend connections
-- associates user IDs with each other 

CREATE TABLE HeloFriends (
    idKey SERIAL INTEGER PRIMARY KEY, 
    userID INTEGER REFERENCES HeloUsers(id),
    friendID INTEGER REFERENCES HeloUsers(id)
);