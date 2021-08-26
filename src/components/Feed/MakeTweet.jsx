import { useRef, useState } from 'react';
import { ReactComponent as ProfileImage } from '../../assets/icons/profile.svg';

const MakeTweet = () => {
  const inputRef = useRef();
  const [inputValue, setInputValue] = useState(inputRef.value ?? '');

  return (
    <form
      className="feed-make-tweet"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
    >
      <div className="feed-make-tweet-top">
        <ProfileImage className="feed-make-tweet__img" />
        <input
          ref={inputRef}
          className="feed-make-tweet__input"
          name="make-tweet"
          type="text"
          placeholder="What's happening?"
          autoComplete="off"
          onChange={(evt) => {
            setInputValue(evt.target.value);
          }}
        />
      </div>
      <div className="feed-make-tweet-bottom">
        <button
          className="feed-make-tweet__btn"
          type="submit"
          disabled={
            inputValue === undefined || inputValue.length > 0 ? false : true
          }
        >
          Tweet
        </button>
      </div>
    </form>
  );
};

export default MakeTweet;
