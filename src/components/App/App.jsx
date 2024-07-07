import "./App.css";

import Loader from '../Loader/Loader';
import Layout from '../Layout/Layout';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { refreshUser } from '../../redux/auth/operations';
import { selectIsRefreshing } from '../../redux/auth/selectors';
import { Route, Routes } from 'react-router-dom';
import RestrictedRoute from '../RestrictedRoute/RestrictedRoute';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import { Suspense, lazy } from 'react';

const HomePage = lazy(() => import('../../pages/HomePage/HomePage'));
const RegistrationPage = lazy(() =>
  import('../../pages/SignUpPage/SignUpPage')
);
const LoginPage = lazy(() => import('../../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(() =>
  import('../../pages/ContactsPage/ContactsPage')
);


function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  const isRefreshing = useSelector(selectIsRefreshing);

  return isRefreshing ? (
    <Loader />
  ) : (
    <Layout>
      
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<HomePage />} />

          <Route
            path="/register"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<RegistrationPage />}
              />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                redirectTo="/contacts"
                component={<LoginPage />}
              />
            }
          />

          <Route
            path="/contacts"
            element={
              <PrivateRoute redirectTo="/login" component={<ContactsPage />} />
            }
          />

  
        </Routes>
      </Suspense>
    </Layout>
  );
}

export default App