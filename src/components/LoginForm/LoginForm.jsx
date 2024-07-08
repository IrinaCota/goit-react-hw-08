import { useDispatch } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import css from './LoginForm.module.css';
import toast from 'react-hot-toast';
import { logIn } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
  email: Yup.string().required('Required!'),
  password: Yup.string().required('Required'),
});

export default function LoginForm() {
  const dispatch = useDispatch();

  const emailFieldId = useId();
  const passwordFieldId = useId();

  return (
    <Formik
      initialValues={{
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(
          logIn({
            email: values.email,
            password: values.password,
          })
        )
          .unwrap()
          .then(() => {
            toast.success('Log in successful');
          })
          .catch(() => {
            toast.error(`Something went wrong! Please, try again!`);
          });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor={emailFieldId}>Email</label>
        <Field name="email" type="email" id={emailFieldId} />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field name="password" type="password" id={passwordFieldId} />
        <ErrorMessage className={css.error} name="password" component="span" />

        <button className={css.loginBtn} type="submit">
          Log in
        </button>
      </Form>
    </Formik>
  );
}