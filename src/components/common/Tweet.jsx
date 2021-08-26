import { Link } from 'react-router-dom';
import { ReactComponent as CommentIcon } from '../../assets/icons/comment.svg';
import { ReactComponent as RetweetIcon } from '../../assets/icons/retweet.svg';
import { ReactComponent as LikeIcon } from '../../assets/icons/like.svg';
import { ReactComponent as ShareIcon } from '../../assets/icons/share.svg';
import SampleAvatar from '../../assets/icons/placeholder.svg';

const Tweet = ({
  avatar,
  authorName,
  authorUsername,
  text,
  comments,
  retweets,
  likes,
  shared,
}) => {
  return (
    <div className="tweet">
      <header className="tweet-header">
        <img className="tweet-header__img" src={avatar} alt="pic" />
        <div className="tweet-header-info">
          <p className="tweet-header-info__name">{authorName}</p>
          <Link
            to={`/profile/${authorUsername}`}
            className="tweet-header-info__username"
          >{`@${authorUsername}`}</Link>
        </div>
        <button className="tweet-header__follow__btn" type="button">
          Follow
        </button>
      </header>

      <p className="tweet__text">{text}</p>

      <footer className="tweet-footer">
        {/* Comments */}
        <button className="tweet-footer__btn" type="button">
          <CommentIcon className="tweet-footer__btn__icon" />
          <span className="tweet-footer__btn__count">{comments}</span>
        </button>
        {/* Retweets */}
        <button className="tweet-footer__btn" type="button">
          <RetweetIcon className="tweet-footer__btn__icon" />
          <span className="tweet-footer__btn__count">{retweets}</span>
        </button>
        {/* Likes */}
        <button className="tweet-footer__btn" type="button">
          <LikeIcon className="tweet-footer__btn__icon" />
          <span className="tweet-footer__btn__count">{likes}</span>
        </button>
        {/* Shared */}
        <button className="tweet-footer__btn" type="button">
          <ShareIcon className="tweet-footer__btn__icon" />
          <span className="tweet-footer__btn__count">{shared}</span>
        </button>
      </footer>
    </div>
  );
};

Tweet.defaultProps = {
  avatar: SampleAvatar,
  authorName: 'unknown',
  authorUsername: 'unknown',
  text: 'tweet',
  comments: '',
  retweets: '',
  likes: '',
  shared: '',
};

export default Tweet;
