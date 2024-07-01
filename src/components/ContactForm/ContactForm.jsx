import { Formik, Form, Field, ErrorMessage as FormikErrorMessage } from "formik";
import { useId } from "react";
import * as Yup from "yup";
import css from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { addContact } from "../../redux/contactsOps";
import { nanoid } from "nanoid";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
  number: Yup.string()
    .required("Required")
    .min(3, "Too short")
    .max(50, "Too long"),
});

export default function ContactForm() {
  const dispatch = useDispatch();

  const nameFieldId = useId();
  const numberFieldId = useId();

  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, actions) => {
        dispatch(
          addContact({
            id: nanoid(),
            name: values.name,
            number: values.number,
          })
        );
        actions.resetForm();
      }}
    >
      {() => (
        <Form className={css.form}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field name="name" type="text" id={nameFieldId} />
          <FormikErrorMessage className={css.error} name="name" component="span" />

          <label htmlFor={numberFieldId}>Number</label>
          <Field name="number" type="text" id={numberFieldId} />
          <FormikErrorMessage className={css.error} name="number" component="span" />

          <button className={css.btn} type="submit">
            Add contact
          </button>
        </Form>
      )}
    </Formik>
  );
}
