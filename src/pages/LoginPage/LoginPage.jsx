
import LoginForm from '../../components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';

export default function LoginPage() {
  return (
    <>
      <h2>Log in</h2>
      <LoginForm />
      <p>
        or <Link>Register account</Link>
      </p>
      <Toaster />
    </>
  );
}