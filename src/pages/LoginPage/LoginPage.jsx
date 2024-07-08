import LoginForm from '../../components/LoginForm/LoginForm';
import { Toaster } from 'react-hot-toast';

export default function LoginPage() {
  return (
    <>
      <LoginForm />
      <Toaster />
    </>
  );
}