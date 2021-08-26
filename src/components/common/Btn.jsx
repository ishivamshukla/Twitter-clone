const Btn = ({ classProp, text, onClick }) => {
  return (
    <button className={`btn ${classProp}`} type="button" onClick={onClick}>
      {text}
    </button>
  );
};

Btn.defaultProps = {
  classProp: '',
  text: '[button]',
  onClick: () => {
    return;
  },
};

export default Btn;
