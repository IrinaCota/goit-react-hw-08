import { useSelector } from 'react-redux';
import AuthNav from '../AuthNav/AuthNav';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import css from './AppHeader.module.css';
import { selectIsLoggedIn } from '../../redux/auth/selectors';


export default function AppHeader() {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return (
    <div className={css.appHeader}>
          <div className={css.navWrapper}>
              <navLink>
                  <Navigation />
              </navLink>
        
      </div>
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </div>
  );
}