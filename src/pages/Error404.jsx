import { useHistory } from 'react-router-dom';

const Error404 = () => {
  const history = useHistory();

  return (
    <main className="error-main">
      <h1 className="error-code" data-text="404">
        404
      </h1>
      <p className="error-description">Page Not Found</p>
      <button
        className="btn error-back-btn"
        type="button"
        onClick={history.goBack}
      >
        Go Back
      </button>
    </main>
  );
};

export default Error404;
