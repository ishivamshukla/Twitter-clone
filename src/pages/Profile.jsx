import { useParams } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';
import Suggestions from '../components/Suggestions/Suggestions';
import Tweets from '../components/Feed/Tweets';

const Profile = () => {
  const { username } = useParams();

  return (
    <div className="main">
      <Sidebar />
      <section className="tweets-section">
        <h1 className="tweets-section__title">{username}'s profile page</h1>
        <Tweets show={username} />
      </section>
      <Suggestions />
    </div>
  );
};

export default Profile;
