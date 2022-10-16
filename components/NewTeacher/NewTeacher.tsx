import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { customAxios } from '../../axiosConfig';
import {
  Button,
  LoginCardFormInput,
  LoginCardFormTitle,
  LoginCardImage,
  LoginCardImageContainer,
} from '../Login/styles';
import {
  UserNoteCardFormContainer,
  UserNoteContainer,
} from '../SpecificsPermissions/styles';
import { TeacherCardForm } from './styles';

type Inputs = {
  cod_user: number;
  name: string;
  lastname: string;
  email: string;
  password: string;
};

type TErrorMessage = {
  status: number;
  message: string;
};

const NewTeacher = ({ authToken, decoded }: any) => {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<TErrorMessage>({
    status: 0,
    message: '',
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    try {
      customAxios.defaults.headers.post['token'] = authToken;
      customAxios.defaults.headers.post['role'] = decoded.rol;
      await customAxios.post('/users', data);

      setErrorMessage({
        status: 200,
        message: 'Login Success',
      });

      router.push({
        pathname: '/private/users',
      });
    } catch (error: any) {
      setErrorMessage(error.response.data);
      return new Error(error.response.data);
    }
  };

  return (
    <UserNoteContainer>
      <UserNoteCardFormContainer>
        <LoginCardImageContainer>
          <LoginCardImage src='https://res.cloudinary.com/vicflores11/image/upload/v1665769025/frontend-utec-timestamp/undraw_online_cv_re_gn0a_lrp354.svg' />
        </LoginCardImageContainer>
        <TeacherCardForm onSubmit={handleSubmit(onSubmit)}>
          <LoginCardFormTitle>Create a new teacher account</LoginCardFormTitle>

          <LoginCardFormInput
            {...register('cod_user', { required: true })}
            placeholder='Teacher code'
            type='number'
          />
          <LoginCardFormInput
            {...register('name', { required: true })}
            placeholder='First Name'
            type='text'
          />
          <LoginCardFormInput
            {...register('lastname', { required: true })}
            placeholder='Last Name'
            type='text'
          />
          <LoginCardFormInput
            {...register('email', { required: true })}
            placeholder='Email'
            type='email'
          />
          <LoginCardFormInput
            {...register('password', { required: true })}
            placeholder='Password'
            type='password'
          />
          <Button>Create new account</Button>
        </TeacherCardForm>
      </UserNoteCardFormContainer>
    </UserNoteContainer>
  );
};

export default NewTeacher;
