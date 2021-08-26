import { Fragment, useEffect, useState } from 'react';
import tweetsDB from '../../data/tweetsDB';
import Tweet from '../common/Tweet';

const Tweets = ({ show }) => {
  const [tweets] = useState(tweetsDB);
  const [sortedTweets, setSortedTweets] = useState(tweets);

  useEffect(() => {
    setSortedTweets(tweets.filter((tweet) => tweet.username === show));
  }, [show, tweets]);

  const convert = (n) => {
    if (n < 1e3) return n;
    if (n >= 1e3 && n < 1e6) return +(n / 1e3).toFixed(1) + 'k';
    if (n >= 1e6 && n < 1e9) return +(n / 1e6).toFixed(1) + 'm';
  };

  if (show === 'all') {
    return (
      <div className="feed-tweets">
        {tweets.map((tweet) => (
          <Tweet
            key={tweet.id}
            avatar={tweet.avatar}
            authorName={tweet.fullName}
            authorUsername={tweet.username}
            text={tweet.text}
            comments={convert(tweet.comments)}
            retweets={convert(tweet.retweets)}
            likes={convert(tweet.likes)}
            shared={convert(tweet.shared)}
          />
        ))}
      </div>
    );
  }

  return (
    <Fragment>
      {sortedTweets.map((tweet) => (
        <Tweet
          key={tweet.id}
          avatar={tweet.avatar}
          authorName={tweet.fullName}
          authorUsername={tweet.username}
          text={tweet.text}
          comments={convert(tweet.comments)}
          retweets={convert(tweet.retweets)}
          likes={convert(tweet.likes)}
          shared={convert(tweet.shared)}
        />
      ))}
    </Fragment>
  );
};

Tweets.defaultProps = {
  show: 'all',
};

export default Tweets;
