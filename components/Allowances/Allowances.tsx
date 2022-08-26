import React from 'react';
import Layout from '../Layout/Layout';
import {
  AllowancesContainer,
  Button,
  LoginCardForm,
  LoginCardFormContainer,
  LoginCardFormInput,
  LoginCardFormTitle,
  LoginCardImage,
  LoginCardImageContainer,
  LoginContainer,
  Table,
  TableButton,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from './styles';

const Allowances = () => {
  return (
    <Layout>
      <AllowancesContainer>
        <LoginContainer>
          <LoginCardFormContainer>
            <LoginCardImageContainer>
              <LoginCardImage src='https://res.cloudinary.com/vicflores11/image/upload/v1661554465/frontend-utec-timestamp/undraw_people_search_re_5rre_pvrv6r.svg' />
            </LoginCardImageContainer>
            <LoginCardForm>
              <LoginCardFormTitle>
                Search teacher permissions
              </LoginCardFormTitle>
              <LoginCardFormInput placeholder='code teacher' type='text' />
              <Button>Search</Button>
            </LoginCardForm>
          </LoginCardFormContainer>
        </LoginContainer>

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
              <Tr>
                <Td>Vic Ferman</Td>
                <Td>Flores Escobar</Td>
                <Td>Saturday, August 6th 2022, 10:20:11 am</Td>
                <Td>Emergency</Td>
                <Td>
                  <TableButton theme={{ bgColor: '#3EC70B', wth: 100 }}>
                    View Note
                  </TableButton>
                </Td>
              </Tr>
              <Tr>
                <Td>Vic Ferman</Td>
                <Td>Flores Escobar</Td>
                <Td>Saturday, August 6th 2022, 10:20:11 am</Td>
                <Td>Emergency</Td>
                <Td>
                  <TableButton theme={{ bgColor: '#3EC70B', wth: 100 }}>
                    View Note
                  </TableButton>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </AllowancesContainer>
    </Layout>
  );
};

export default Allowances;
