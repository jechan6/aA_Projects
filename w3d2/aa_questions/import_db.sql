PRAGMA foreign_keys = ON;
CREATE TABLE users(
  id INTEGER PRIMARY KEY,
  fname TEXT NOT NULL,
  lname TEXT NOT NULL
);

CREATE TABLE questions(
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  author_id INTEGER,  
  FOREIGN KEY (author_id) REFERENCES users(id)
);

INSERT INTO users(fname, lname)
VALUES ("Bob", "Smith");

INSERT INTO users(fname, lname)
VALUES ("John", "Doe");

INSERT INTO questions(title, body, author_id)
VALUES ("Hi", "I have a questions", 1);

INSERT INTO questions(title, body, author_id)
VALUES ("Hi", "I have a questions", 2);

CREATE TABLE question_follows(
  user_id INTEGER,
  question_id INTEGER,
  FOREIGN KEY (user_id) REFERENCES users(id),
  FOREIGN KEY (question_id) REFERENCES questions(id)
);

CREATE TABLE replies(
  id INTEGER PRIMARY KEY,
  question_id INTEGER,
  parent_id INTEGER,
  user_id INTEGER,
  body TEXT,
  
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (parent_id) REFERENCES replies(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
);

CREATE TABLE question_likes(
  id INTEGER PRIMARY KEY,
  user_id INTEGER,
  question_id INTEGER,
  
  FOREIGN KEY (question_id) REFERENCES questions(id),
  FOREIGN KEY (user_id) REFERENCES user(id)
  
);

INSERT INTO question_follows(user_id, question_id)
VALUES (1, 1);
INSERT INTO question_follows(user_id, question_id)
VALUES (2, 2);

INSERT INTO replies(question_id, user_id, body)
VALUES (1, 1, "Good Question!");
INSERT INTO replies(question_id, parent_id, user_id, body)
VALUES (1, 1, 1, "I Agree!!!!");

I

