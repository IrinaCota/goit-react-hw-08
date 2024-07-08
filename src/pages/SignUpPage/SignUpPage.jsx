import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import { Toaster } from 'react-hot-toast';

export default function SignUpPage() {
   return (
    <>
       <RegistrationForm />
       <Toaster />
    </>
  );
}