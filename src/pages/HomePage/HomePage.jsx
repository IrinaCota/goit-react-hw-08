import css from './HomePage.module.css';

const HomePage = () => {
  return (
      <>
          <h1 className={css.title}>Welcome to PhoneBook!</h1>
          <h2 className={css.subtitle}>Store and manage your contacts with our App</h2>
    </>
  );
};
export default HomePage;