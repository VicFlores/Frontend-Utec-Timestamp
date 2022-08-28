import React from 'react';
import Layout from '../Layout/Layout';
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

const SpecificsPermissions = () => {
  return (
    <Layout>
      <LoginContainer>
        <LoginCardFormContainer>
          <LoginCardImageContainer>
            <LoginCardImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661552262/frontend-utec-timestamp/undraw_web_search_re_efla_xbw3x1.svg' />
          </LoginCardImageContainer>
          <LoginCardForm>
            <LoginCardFormTitle>Teacher information</LoginCardFormTitle>
            <LoginCardFormInput placeholder='Code teacher' type='text' />
            <LoginCardFormInput placeholder='Name' type='text' />
            <LoginCardFormInput placeholder='Lastname' type='text' />
            <LoginCardFormInput placeholder='Email' type='email' />
            <LoginCardFormInput placeholder='Dialing' type='text' />
            <label>Reason of permission</label>
            <LoginCardFormInput type='text' />
          </LoginCardForm>
        </LoginCardFormContainer>
      </LoginContainer>
    </Layout>
  );
};

export default SpecificsPermissions;
