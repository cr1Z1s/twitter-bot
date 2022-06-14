require("dotenv").config();
const pool = require("./db");
const twit = require("./twit")

const keyword = "Algeria"

twit.get('search/tweets', { q: `${keyword} since:2011-07-11`, count: 20 }, async function (err, data, response) {
  try {

    const tweets = data.statuses;
    for (let i = 0; i < tweets.length; i++) {
      const tweet = tweets[i];
      const { id, created_at, user, text } = tweet;
      const screen_name = user.screen_name;

      //check if any of the tweets already exists
      await pool.query("SELECT tweet_id FROM tweets WHERE tweet_id = $1", [id], async (err, result) => {
        if (!err) {
          if (result.rowCount === 0) {
            //insert the tweets in the database
            const newTweet = await pool.query("INSERT INTO tweets (tweet_id, screen_name, date_created, tweet_text) VALUES($1, $2, $3, $4)", [id, screen_name, created_at, text]);
          } else {
            console.log("this tweet exists already!")
          }
        } else {
          console.log(err.message);
        }
      });
    }

  } catch (error) {
    console.error(error);
  }
})

