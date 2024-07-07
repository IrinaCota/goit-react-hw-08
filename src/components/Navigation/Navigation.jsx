import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';
import clsx from 'clsx';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import { FaHome } from 'react-icons/fa';
import { RiContactsBook3Fill } from 'react-icons/ri';
import AuthNav from '../AuthNav/AuthNav';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  
  return (
    <header className={css.header}>
      <nav>
        <div className={css.navigation}>
          <NavLink to="/" className={makeNavLinkClass}>
            <FaHome className={css.icon} /> Home
          </NavLink>
          {isLoggedIn && (
            <NavLink to="/contacts" className={makeNavLinkClass}>
              <RiContactsBook3Fill className={css.icon} /> Contacts
            </NavLink>
          )}
        </div>
        {isLoggedIn ? <RestrictedRoute /> : <AuthNav />}
      </nav>
    </header>
  );
}
