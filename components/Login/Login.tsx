import React from 'react';
import {
  Button,
  LoginCardForm,
  LoginCardFormContainer,
  LoginCardFormInput,
  LoginCardFormTitle,
  LoginCardImage,
  LoginCardImageContainer,
  LoginContainer,
} from './styles';

const Login = () => {
  return (
    <LoginContainer>
      <LoginCardFormContainer>
        <LoginCardImageContainer>
          <LoginCardImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661274853/frontend-utec-timestamp/undraw_login_re_4vu2_pcqgkc.svg' />
        </LoginCardImageContainer>
        <LoginCardForm>
          <LoginCardFormTitle>Welcome to Utec Timestamp!</LoginCardFormTitle>
          <LoginCardFormInput placeholder='Email' type='email' />
          <LoginCardFormInput placeholder='Password' type='password' />
          <Button>Login</Button>
        </LoginCardForm>
      </LoginCardFormContainer>
    </LoginContainer>
  );
};

export default Login;
