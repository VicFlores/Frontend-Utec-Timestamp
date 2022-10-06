import axios, { AxiosResponse } from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../context/AuthTokenContext';
import { TArrayResponse } from '../../types/TArrayResponse';
import Layout from '../Layout/Layout';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from './styles';

const Dash = () => {
  const [allTimestamps, setAllTimestamps] = useState<TArrayResponse>();
  const { authCookie }: any = useContext(AuthContext);

  useEffect(() => {
    try {
      if (authCookie?.data) {
        const getTimestamps = async () => {
          const getTimestamps: any = await axios.get(
            'https://backend-utec-timestamp.herokuapp.com/api/v1/timestamp',
            {
              headers: {
                token: authCookie.data,
                role: 'admin',
              },

              params: {
                limit: 10,
                skip: 0,
              },
            }
          );

          setAllTimestamps(getTimestamps);
        };

        getTimestamps();
      }
    } catch (error) {
      console.log(error);
    }
  }, [authCookie]);

  return (
    <Layout>
      <TableContainer>
        <Table className='animate__animated animate__fadeInLeft'>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Lastname</Th>
              <Th>Dialing</Th>
              <Th>Type of permissions</Th>
            </Tr>
          </Thead>
          <Tbody>
            {allTimestamps?.data ? (
              allTimestamps.data.map((value: any) => {
                return (
                  <Tr key={value._id}>
                    <Td>{value.result.name}</Td>
                    <Td>{value.result.lastname}</Td>
                    <Td>{value.dialing}</Td>
                    <Td>{value.type}</Td>
                  </Tr>
                );
              })
            ) : (
              <Tr key={Math.floor(Math.random() * 5) + 1}>
                <Td>Waiting name</Td>
                <Td>Waiting lastname</Td>
                <Td>Waiting dialing</Td>
                <Td>Waiting type of permissions</Td>
              </Tr>
            )}
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Dash;
