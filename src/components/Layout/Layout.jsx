import Navigation from '../Navigation/Navigation';
import css from './Layout.module.css';
import PropTypes from 'prop-types';

const Layout = ({ children }) => {
  return (
    <div className={css.layout}>
      <Navigation />
      <main className={css.mainContent}>{children}</main>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
