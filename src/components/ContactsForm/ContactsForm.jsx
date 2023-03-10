import PropTypes from 'prop-types';
import { Formik } from 'formik';
import { nanoid } from 'nanoid';
import * as Yup from 'yup';

import {
  Form,
  FormButton,
  FormField,
  ErrorMessage,
  Field,
} from './ContactsForm.styled';

const phoneRegex =
  /^\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}$/;
const phoneError =
  'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +';

const ContactSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please, enter contact name'),
  number: Yup.string()
    .matches(phoneRegex, phoneError)
    .required('Please, enter phone number'),
});

export const ContactsForm = ({ onSave }) => {
  return (
    <Formik
      initialValues={{
        name: '',
        number: '',
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, actions) => {
        onSave({ ...values, id: nanoid() });
        actions.resetForm();
      }}
    >
      <Form>
        <FormField>
          Name
          <Field type="text" name="name" autoComplete="off" />
          <ErrorMessage name="name" component="span" />
        </FormField>
        <FormField>
          Number
          <Field type="tel" name="number" autoComplete="off" />
          <ErrorMessage name="number" component="span" />
        </FormField>

        <FormButton type="submit">Add contact</FormButton>
      </Form>
    </Formik>
  );
};

ContactsForm.propTypes = {
  onSave: PropTypes.func.isRequired,
};
