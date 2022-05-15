CREATE DATABASE cryptotweet;

CREATE TABLE  tweets(
  tweet_id VARCHAR(255) PRIMARY KEY,
  screen_name VARCHAR(255),
  date_created VARCHAR(255),
  text TEXT,
);