CREATE TABLE IF NOT EXISTS HeloUsers (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(100),
    last_name VARCHAR(100),
    gender VARCHAR(80),
    img TEXT,
    hair_color VARCHAR(100),
    eye_color VARCHAR(100),
    hobby VARCHAR(180),
    birth_day INTEGER,
    birth_month INTEGER,
    birth_year INTEGER
);