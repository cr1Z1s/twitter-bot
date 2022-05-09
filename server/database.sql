CREATE DATABASE cryptotweet;

CREATE TABLE  todo(
  tweet_id SERIAL PRIMARY KEY,
  tweet_body VARCHAR(255)
);