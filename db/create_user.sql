INSERT INTO HeloUsers 
(first_name, last_name, birth_day, birth_month, birth_year)
VALUES 
($1, $2, $3, $4, $5)
RETURNING *; 