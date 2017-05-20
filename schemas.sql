/*

To run this file, we do the following in our Terminal:

1. Go to the directory of this sql file.

2. Get into our mysql console.

3. Run "source schema.sql"

*/

CREATE DATABASE fruits_veggies_grains_db;
USE fruits_veggies_grains_db;

-- Create the table events.
CREATE TABLE apple_comments
(
id int NOT NULL AUTO_INCREMENT,
comment text NOT NULL,
PRIMARY KEY (id)
);

-- later lets set a limit to the text box of 1500 characters so users know they cannot go above. 

-- Insert a set of records.
INSERT INTO apple_comments (comment) VALUES ("An apple a day keeps the doctor away");




-- CREATE TABLE veggie_comments

