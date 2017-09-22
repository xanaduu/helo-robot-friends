-- add a friend association to our friends table
-- associates the users' IDs with each other and assigns it a primary key

INSERT INTO HeloFriends
(userID, friendID)
VALUES
($1, $2);