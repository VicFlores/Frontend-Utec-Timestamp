import React, { useContext, useEffect, useState } from 'react';
import { customAxios } from '../../axiosConfig';

import { TArrayResponse } from '../../types/TArrayResponse';
import { Table, Tbody, Td, Th, Thead, Tr } from '../Dash/styles';
import Layout from '../Layout/Layout';
import { Button, TableContainer } from './styles';

const Teachers = ({ authToken, decoded }: any) => {
  const [allUsers, setAllUsers] = useState<TArrayResponse>();

  useEffect(() => {
    try {
      const getTeachers = async () => {
        const getTimestamps: any = await customAxios.get('/users', {
          headers: {
            token: authToken,
            role: decoded.rol,
          },

          params: {
            limit: 10,
            skip: 0,
          },
        });

        setAllUsers(getTimestamps);
      };
      getTeachers();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Layout>
      <TableContainer>
        <Button theme={{ marginL: '20px' }}>New Teacher</Button>
        <Table className='animate__animated animate__fadeInLeft'>
          <Thead>
            <Tr>
              <Th>Teacher code</Th>
              <Th>Name</Th>
              <Th>Lastname</Th>
              <Th>Email</Th>
              <Th>Photo</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allUsers?.data ? (
              allUsers.data.map((value: any) => {
                return (
                  <Tr key={value._id}>
                    <Td>{value.cod_user}</Td>
                    <Td>{value.name}</Td>
                    <Td>{value.lastname}</Td>
                    <Td>{value.email}</Td>
                    {value.photo_example_1 ||
                    value.photo_example_2 === 'Pending' ? (
                      <Td>
                        <Button theme={{ marginL: 0 }}>Upload Photos</Button>
                      </Td>
                    ) : (
                      <Td>Photos completed</Td>
                    )}
                  </Tr>
                );
              })
            ) : (
              <Tr key={Math.floor(Math.random() * 5) + 1}>
                <Td>Waiting name</Td>
                <Td>Waiting lastname</Td>
                <Td>Waiting email</Td>
                <Td>Waiting photos</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Teachers;
