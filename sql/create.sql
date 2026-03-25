CREATE TABLE form (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100) NOT NULL,
  subject VARCHAR(100) NOT NULL,
  age INTEGER CHECK (age >= 18),
  message VARCHAR(500) NOT NULL
);
