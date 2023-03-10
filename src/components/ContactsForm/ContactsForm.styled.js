import styled from 'styled-components';
import {
  Form as FormikForm,
  ErrorMessage as Error,
  Field as FormikField,
} from 'formik';

export const Form = styled(FormikForm)`
  position: relative;
  margin: 30px auto;
  width: 600px;
  height: 300px;
  padding: 20px;
  border: 2px solid #485768;
  border-radius: 6px;
  box-shadow: 2px 2px 6px 1px #485768;
`;

export const FormField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 20px;
`;

export const FormButton = styled.button`
  position: absolute;
  bottom: 25px;
  left: 25px;

  padding: 7px 15px;
  border: none;
  border-radius: 7px;
  font-size: 18px;
  background-color: white;
  color: black;
  box-shadow: 1px 1px 5px 2px #485768;
  cursor: pointer;

  transition: transform 300ms ease-in-out;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    color: white;
    background-color: #629ee1;
  }
`;

export const ErrorMessage = styled(Error)`
  color: red;
`;

export const Field = styled(FormikField)`
  height: 40px;
  padding: 5px 15px;
  border-radius: 6px;
  margin-bottom: 6px;
`;
