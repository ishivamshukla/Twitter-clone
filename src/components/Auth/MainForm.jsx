import { Link } from 'react-router-dom';

const MainForm = () => {
  return (
    <form className="auth-form">
      <div className="auth-form-container">
        <h2 className="auth-form__title">
          See what's happening in the world right now
        </h2>
        <p className="auth-form__subtitle">Join Twitter today</p>
        <div className="auth-form-buttons">
          <Link to="/signup" className="btn auth-form-buttons__btn">
            Sign Up
          </Link>
          <Link
            to="/login"
            className="btn auth-form-buttons__btn auth-form-buttons__btn--login"
          >
            Log In
          </Link>
        </div>
      </div>
    </form>
  );
};

export default MainForm;
