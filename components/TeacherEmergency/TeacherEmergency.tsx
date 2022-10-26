import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { customAxios } from '../../axiosConfig';
import {
  Button,
  LoginCardForm,
  LoginCardFormContainer,
  LoginCardFormInput,
  LoginCardFormTitle,
  LoginCardImage,
  LoginCardImageContainer,
  SearchContainer,
} from '../Allowances/styles';

type Inputs = {
  note: string;
};

type TErrorMessage = {
  status: number;
  message: string;
};

const TeacherEmergency = ({ authToken, decoded }: any) => {
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
    const { note } = data;
    try {
      customAxios.defaults.headers.post['token'] = authToken;
      customAxios.defaults.headers.post['role'] = decoded.rol;
      await customAxios.post('/timestamp/emergency', {
        _idUser: decoded.sub,
        note,
      });
    } catch (error: any) {
      setErrorMessage(error.response.data);
      return new Error(error.response.data);
    }
  };

  return (
    <SearchContainer>
      <LoginCardFormContainer>
        <LoginCardImageContainer>
          <LoginCardImage src='https://res.cloudinary.com/vicflores11/image/upload/v1666135109/frontend-utec-timestamp/undraw_warning_re_eoyh_wlkvvr.svg' />
        </LoginCardImageContainer>
        <LoginCardForm onSubmit={handleSubmit(onSubmit)}>
          <LoginCardFormTitle>Emergency Timestamp</LoginCardFormTitle>
          <LoginCardFormInput
            {...register('note', { required: true })}
            placeholder='Reason for permission'
            type='text'
          />
          <Button>Timestamp</Button>
        </LoginCardForm>
      </LoginCardFormContainer>
    </SearchContainer>
  );
};

export default TeacherEmergency;
