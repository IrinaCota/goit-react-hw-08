import css from './Layout.module.css'

const Layout = ({ children })=> {
    return (
     <div className={css.appContainer}>{children}</div>
    );
    };

export default Layout;