import css from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={css.footer}>
      <footer>
        <p className={css.footerText}>Thank you for choosing our App</p>
      </footer>
    </div>
  );
};

export default Footer;
