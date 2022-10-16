import React, { useContext, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  AllowancesContainer,
  Button,
  LoginCardForm,
  LoginCardFormContainer,
  LoginCardFormInput,
  LoginCardFormTitle,
  LoginCardImage,
  LoginCardImageContainer,
  SearchContainer,
  Table,
  TableButton,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './styles';

import { customAxios } from '../../axiosConfig';
import { TArrayResponse } from '../../types/TArrayResponse';
import Link from 'next/link';

type Inputs = {
  cod_user: number;
};

type TErrorMessage = {
  status: number;
  message: string;
};

const Allowances = ({ authToken, decoded }: any) => {
  const [userByCode, setUserByCode] = useState<TArrayResponse>();
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
    const { cod_user } = data;
    try {
      const response: any = await customAxios.get(
        '/timestamp/specific/user/code/registers',
        {
          headers: {
            token: authToken,
            role: decoded.rol,
          },

          params: {
            limit: 10,
            skip: 0,
            cod_user,
          },
        }
      );

      setUserByCode(response);
    } catch (error: any) {
      setErrorMessage(error.response.data);
      return new Error(error.response.data);
    }
  };

  return (
    <AllowancesContainer>
      <SearchContainer>
        <LoginCardFormContainer>
          <LoginCardImageContainer>
            <LoginCardImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661554465/frontend-utec-timestamp/undraw_people_search_re_5rre_pvrv6r.svg' />
          </LoginCardImageContainer>
          <LoginCardForm onSubmit={handleSubmit(onSubmit)}>
            <LoginCardFormTitle>Search teacher permissions</LoginCardFormTitle>
            <LoginCardFormInput
              {...register('cod_user', { required: true })}
              placeholder='code teacher'
              type='number'
            />
            <Button>Search</Button>
          </LoginCardForm>
        </LoginCardFormContainer>
      </SearchContainer>

      <TableContainer>
        <Table className='animate__animated animate__fadeInLeft'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Lastname</Th>
              <Th>Dialing</Th>
              <Th>Type of permissions</Th>
              <Th>Note of permission</Th>
            </Tr>
          </Thead>
          <Tbody>
            {userByCode?.data.length === 0 ? (
              <Tr key={Math.floor(Math.random() * 5) + 1}>
                <Td>Dialing not yet done</Td>
                <Td>Dialing not yet done</Td>
                <Td>Dialing not yet done</Td>
                <Td>Dialing not yet done</Td>
                <Td>Dialing not yet done</Td>
              </Tr>
            ) : userByCode?.data ? (
              userByCode.data.map((value: any) => {
                return (
                  <Tr key={value._id}>
                    <Td>{value.result.name}</Td>
                    <Td>{value.result.lastname}</Td>
                    <Td>{value.dialing}</Td>
                    <Td>{value.type}</Td>
                    <Td>
                      <Link href={`/private/userNotes/${value._id}`}>
                        <TableButton theme={{ bgColor: '#3EC70B', wth: 100 }}>
                          View Note
                        </TableButton>
                      </Link>
                    </Td>
                  </Tr>
                );
              })
            ) : (
              <Tr key={Math.floor(Math.random() * 5) + 1}>
                <Td>Waiting name</Td>
                <Td>Waiting lastname</Td>
                <Td>Waiting dialing</Td>
                <Td>Waiting type of permissions</Td>
                <Td>Waiting note of permissions button</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </AllowancesContainer>
  );
};

export default Allowances;
