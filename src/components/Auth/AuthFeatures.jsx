import AuthImg from '../../assets/images/auth.png';

const AuthFeatures = () => {
  return (
    <figure className="auth-features">
      <img
        className="auth-features__img"
        src={AuthImg}
        alt="Features of twitter"
      />
    </figure>
  );
};

export default AuthFeatures;
