import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useId } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import css from './RegistrationForm.module.css';
import { useDispatch } from 'react-redux';
import { register } from '../../redux/auth/operations';

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
  email: Yup.string().email('Please enter a valid email address').required('Required'),
  password: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
});

export default function RegistrationForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const emailFieldId = useId();
  const passwordFieldId = useId();
  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        password: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(
          register({
            name: values.name,
            email: values.email,
            password: values.password,
          })
        )
          .unwrap()
          .then(() => {
            toast.success('Account successfully created!');
          })
          .catch((error) => {
            toast.error(
              error === 400
                ? 'This email has already been taken'
                : 'Something went wrong! Please, try again later!'
            );
          });
        actions.resetForm();
      }}
    >
      <Form className={css.form}>
        <label htmlFor={nameFieldId}>Name</label>
        <Field name="name" type="text" id={nameFieldId} />
        <ErrorMessage className={css.error} name="name" component="span" />

        <label htmlFor={emailFieldId}>Email</label>
        <Field name="email" type="email" id={emailFieldId} />
        <ErrorMessage className={css.error} name="email" component="span" />

        <label htmlFor={passwordFieldId}>Password</label>
        <Field name="password" type="password" id={passwordFieldId} />
        <ErrorMessage className={css.error} name="password" component="span" />

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
}