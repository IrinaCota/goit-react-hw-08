import Navigation from '../Navigation/Navigation';

import css from './Layout.module.css';

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <Navigation />
      <main className={css.mainContent}>{children}</main>
    </div>
  );
};
export default Layout;