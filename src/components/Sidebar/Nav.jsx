import { useParams } from 'react-router-dom';
import NavItem from './NavItem';
import { ReactComponent as Bookmarks } from '../../assets/icons/bookmarks.svg';
import { ReactComponent as Explore } from '../../assets/icons/explore.svg';
import { ReactComponent as Home } from '../../assets/icons/home.svg';
import { ReactComponent as Lists } from '../../assets/icons/lists.svg';
import { ReactComponent as Messages } from '../../assets/icons/messages.svg';
import { ReactComponent as More } from '../../assets/icons/more.svg';
import { ReactComponent as Notifications } from '../../assets/icons/notifications.svg';
import { ReactComponent as Profile } from '../../assets/icons/profile.svg';

const Nav = () => {
  const { username } = useParams();

  return (
    <nav className="sidebar-nav">
      <ul className="sidebar-nav-list">
        <NavItem to="/" text="Home" icon={Home} />
        <NavItem to="/explore" text="Explore" icon={Explore} />
        <NavItem
          to="/notifications"
          text="Notifications"
          icon={Notifications}
        />
        <NavItem to="/messages" text="Messages" icon={Messages} />
        <NavItem to="/bookmarks" text="Bookmarks" icon={Bookmarks} />
        <NavItem to="/lists" text="Lists" icon={Lists} />
        <NavItem to={`/profile/${username}`} text="Profile" icon={Profile} />
        <NavItem to="/more" text="More" icon={More} />
      </ul>
    </nav>
  );
};

export default Nav;
