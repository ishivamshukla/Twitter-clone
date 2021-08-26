import { useRef } from 'react';
import { useHistory } from 'react-router-dom';

const LoginForm = () => {
  const history = useHistory();

  const usernameRef = useRef();
  const passwdRef = useRef();

  const rand = () => Math.random().toString(36).substr(2);
  const genToken = () => rand() + rand() + rand();

  return (
    <form className="auth-form">
      <div className="auth-form-container">
        <h2 className="auth-form__title">Login</h2>

        <div className="auth-form-inputs">
          <input
            ref={usernameRef}
            className="auth-form-inputs__item"
            type="text"
            name="sign-up-input__username"
            placeholder="Username"
            required
          />
          <input
            ref={passwdRef}
            className="auth-form-inputs__item"
            type="password"
            name="sign-up-input__passwd"
            placeholder="Password"
            required
          />
        </div>
        <div className="auth-form-buttons">
          <button
            className="auth-form-buttons__btn"
            type="button"
            onClick={() => {
              if (
                usernameRef.current.value.length > 0 &&
                passwdRef.current.value.length > 0
              ) {
                window.localStorage.setItem('auth', genToken());
              }
              window.location.reload();
              history.push('/');
            }}
          >
            Login
          </button>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
