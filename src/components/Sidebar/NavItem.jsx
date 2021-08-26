import { NavLink } from 'react-router-dom';

const NavItem = ({ to, text, icon }) => {
  const Icon = icon;

  return (
    <li className="sidebar-nav-list-item">
      <NavLink
        className="sidebar-nav-list-item__link"
        activeClassName="sidebar-nav-list-item__link--active"
        to={to}
        exact
      >
        <Icon />
        <span className="sidebar-nav-list-item__link__text">{text}</span>
      </NavLink>
    </li>
  );
};

NavItem.defaultProps = {
  to: '/',
  text: '[link]',
  icon: '',
};

export default NavItem;
