-- create a new user!
-- method will be called upon login/registration
-- hair_color, eye_color, hobby, gender all randomized and input
-- we are only asking new users for first_name, last_name, birth_day birth_month birth_year

INSERT INTO HeloUsers 
(auth_id, first_name, last_name, gender, hair_color, eye_color, hobby, birth_day, birth_month, birth_year)
VALUES 
($1, $2, $3, $4, $5, $6, $7, $8, $9)
RETURNING *; 