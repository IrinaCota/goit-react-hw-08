import { useSelector } from 'react-redux';
import { selectAuth } from '../../redux/auth/selectors';
import { Navigate } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function PrivateRoute({ component: Component, redirectTo = '/' }) {
  const { isLoggedIn, token } = useSelector(selectAuth);

  if (!isLoggedIn && token) {
    return <p>Loading...</p>;
  }
  if (!isLoggedIn && !token) {
    return <Navigate to={redirectTo} />;
  }

  return Component;
}

PrivateRoute.propTypes = {
  component: PropTypes.element.isRequired,
  redirectTo: PropTypes.string,
};
