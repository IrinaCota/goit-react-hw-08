import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Toaster } from 'react-hot-toast';

export default function SignUpPage() {
 
  return (
    <>
      <h2>Create new account</h2>
      <RegistrationForm/>
      <Toaster />
    </>
  );
}