import Header from './Header';
import MakeTweet from './MakeTweet';
import Tweets from './Tweets';

const Feed = () => {
  return (
    <main className="feed">
      <Header />
      <MakeTweet />
      <Tweets show="all" />
    </main>
  );
};

export default Feed;
