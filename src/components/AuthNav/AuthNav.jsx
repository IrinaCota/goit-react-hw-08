import { NavLink } from 'react-router-dom';

import css from './AuthNav.module.css';

const AuthNav = () => {
  return (
    <ul className={css.list}>
      <li>
        <NavLink to="/register" className={css.authLink}>Register</NavLink>
      </li>
      <li>
        <NavLink to="/login" className={css.authLink}>Log in</NavLink>
      </li>
    </ul>
  );
};
export default AuthNav;