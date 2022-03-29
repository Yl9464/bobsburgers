SHOW DATABASES;

CREATE DATABASE bobsBurgers;

CREATE USER 'bobsBurgers'@'localhost' IDENTIFIED WITH mysql_native_password BY 'B0b$Burg&r$!';
GRANT ALL ON bobsBurgers.* TO 'bobsBurgers'@'localhost';

USE bobsBurgers;

CREATE TABLE members (
id INT auto_increment,
name VARCHAR(255),
relation VARCHAR(255),
bestQuote VARCHAR(255),
characterGroup ENUM ('The Belchers', 'The Pestos', 'Wagstaff Students', 'Minor Characters'),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE characteristics(
id INT auto_increment,
trait VARCHAR (255),
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (id)
);

CREATE TABLE characteristicMembers(
characteristicId INT,
memberId INT,
createdAt DATETIME DEFAULT NOW(),
updatedAt DATETIME DEFAULT NOW(),
deletedAt DATETIME,
PRIMARY KEY (characteristicId, memberId),
FOREIGN KEY(characteristicId) REFERENCES characteristics(id),
FOREIGN KEY(memberId) REFERENCES members(id)
); 

INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Bob Belcher', 'Father', 'You are my family and I love you but you are all terrible...', 'The Belchers');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Linda Belcher', 'Mother', 'When I die I want you to cremate me and throw me in Tom Sellecks face.', 'The Belchers');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Tina Belcher', 'Eldest Daughter', 'Your ass is grass and I am going to mow it.', 'The Belchers');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Gene Belcher', 'Son', 'Would you rather have a lifetime of regret or an afternoon of mild disappointment?', 'The Belchers');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Louise Belcher', 'Younger Daughter', 'You could sell your soul. I did and look at me!', 'The Belchers');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Jimmy Poplopovich', 'Bobs nemisis', 'What are they writing? An article on guys with mustaches you wanna punch?','The Pestos');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Jimmy Jr', 'Tinas crush', 'I dont need speech therapy dad! You need dance therapy!', 'The Pestos');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Ollie','Pesto Twins', 'We switched underware!', 'The Pestos');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Andy', 'Pesto Twins', 'shhh Ollie, that was supposed to be a secret!', 'The Pestos');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Regular Sized Rudy', 'Asthmatic student', 'Fun hurts my lungs!', 'Wagstaff Students');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Alex Papasian', 'Genes BFF', 'It is a big plate of farts.', 'Wagstaff Students');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Tammy Larsen', 'Mean Girl', 'Dont be a boob punch.', 'Wagstaff Students');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Jocelyn', 'Tammys friend', 'They are just like Mario and Luigi. So in love.', 'Wagstaff Students');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Zeke', 'Jimmy Jrs BFF', 'This will always be remembered- until people forget.', 'Wagstaff Students');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Nat Kinkle', 'Limo Driver', 'I know the owner. I saved his life after I hit him with my car.', 'Minor Characters');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Mort', 'Town mortitian', 'Pretending to look it up... wishing I did not come in here today', 'Minor Characters');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Mike Wobbles', 'Mailman', 'Im not a billionaire but I am rich in mail.', 'Minor Characters');
INSERT INTO members (name, relation, bestQuote, characterGroup) VALUES('Gretchen', 'Hair dresser', 'Do you have an MBA Linda? Because you are all up in my business!', 'Minor Characters');

INSERT INTO characteristics (trait) VALUES('Annoying');
INSERT INTO characteristics (trait) VALUES('Awkward');
INSERT INTO characteristics (trait) VALUES('Boy crazy');
INSERT INTO characteristics (trait) VALUES('Calculated');
INSERT INTO characteristics (trait) VALUES('Caring');
INSERT INTO characteristics (trait) VALUES('Clueless');
INSERT INTO characteristics (trait) VALUES('Clumsy');
INSERT INTO characteristics (trait) VALUES('Codependent');
INSERT INTO characteristics (trait) VALUES('Confident');
INSERT INTO characteristics (trait) VALUES('Dancer');
INSERT INTO characteristics (trait) VALUES('Dim witted');
INSERT INTO characteristics (trait) VALUES('Driven');
INSERT INTO characteristics (trait) VALUES('Flirtatious');
INSERT INTO characteristics (trait) VALUES('Hard Worker');
INSERT INTO characteristics (trait) VALUES('Hilarious');
INSERT INTO characteristics (trait) VALUES('Kind');
INSERT INTO characteristics (trait) VALUES('Lazy');
INSERT INTO characteristics (trait) VALUES('Lonely');
INSERT INTO characteristics (trait) VALUES('Loud');
INSERT INTO characteristics (trait) VALUES('Loyal');
INSERT INTO characteristics (trait) VALUES('Musical');
INSERT INTO characteristics (trait) VALUES('Outspoken');
INSERT INTO characteristics (trait) VALUES('Passionate');
INSERT INTO characteristics (trait) VALUES('Punchable');
INSERT INTO characteristics (trait) VALUES('Punny');
INSERT INTO characteristics (trait) VALUES('Reserved');
INSERT INTO characteristics (trait) VALUES('Rude');
INSERT INTO characteristics (trait) VALUES('Sensible');
INSERT INTO characteristics (trait) VALUES('Sweet');

INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(1, 6);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(1, 7);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(1, 12);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(2, 3);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(3, 3);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(4, 5);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(5, 1);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(6, 13);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(7, 13);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(7, 10);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(8, 8);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(8, 9);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(8, 13);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(8, 14);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(9, 5);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(9, 17);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(9, 18);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(10, 7);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(11, 13);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(11, 14);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(12, 1);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(12, 2);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(13, 18);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(14, 17);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(15, 4);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(15, 5);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(15, 15);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(16, 11);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(16, 15);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(17, 11);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(18, 6);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(19, 2);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(19, 4);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(20, 8);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(20, 9);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(20, 10);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(20, 14);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(21, 2);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(21, 3);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(21, 4);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(22, 18);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(23, 3);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(23, 15);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(23, 16);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(24, 6);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(24, 7);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(24, 12);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(25, 1);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(26, 18);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(27, 6);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(27, 12);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(28, 16);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(28, 17);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(29, 8);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(29, 9);
INSERT INTO characteristicMembers(characteristicId, memberId) VALUES(29, 10);
