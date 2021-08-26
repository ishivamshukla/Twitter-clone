import { ReactComponent as ThemeSwitcher } from '../../assets/icons/theme-switcher.svg';

const Header = () => {
  return (
    <header className="feed-header">
      <h1 className="feed-header__title">Home</h1>
      <button className="feed-header__btn" type="button">
        <ThemeSwitcher />
      </button>
    </header>
  );
};

export default Header;
