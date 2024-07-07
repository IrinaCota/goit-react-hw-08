import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css";
import clsx from "clsx";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";

const makeNavLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <nav className={css.nav}>
      <NavLink to="/" className={makeNavLinkClass}>
        Home
      </NavLink>
     
      {isLoggedIn && (
        
          <NavLink to="/contacts" className={makeNavLinkClass}>
            Contacts
          </NavLink>
        
      )}
    </nav>
  );
}
