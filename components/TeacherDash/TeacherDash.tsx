import React, { useEffect, useState } from 'react';
import { customAxios } from '../../axiosConfig';
import { TArrayResponse } from '../../types/TArrayResponse';
import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from '../Dash/styles';

const TeacherDash = ({ authToken, decoded }: any) => {
  const [allUserTimestamp, setAllUserTimestamp] = useState<TArrayResponse>();

  useEffect(() => {
    try {
      const getTimestamps = async () => {
        const getTimestamps: any = await customAxios.get(
          '/timestamp/specific/user/code/registers',
          {
            headers: {
              token: authToken,
              role: decoded.rol,
            },

            params: {
              limit: 10,
              skip: 0,
              cod_user: decoded.cod_user,
            },
          }
        );

        setAllUserTimestamp(getTimestamps);
      };
      getTimestamps();
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <TableContainer>
      <Table className='animate__animated animate__fadeInLeft'>
        <Thead>
          <Tr>
            <Th>Teacher code</Th>
            <Th>Name</Th>
            <Th>Lastname</Th>
            <Th>Dialing</Th>
            <Th>Type of permissions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {allUserTimestamp?.data ? (
            allUserTimestamp.data.map((value: any) => {
              return (
                <Tr key={value._id}>
                  <Td>{value.result.cod_user}</Td>
                  <Td>{value.result.name}</Td>
                  <Td>{value.result.lastname}</Td>
                  <Td>{value.dialing}</Td>
                  <Td>{value.type}</Td>
                </Tr>
              );
            })
          ) : (
            <Tr key={Math.floor(Math.random() * 5) + 1}>
              <Td>Waiting teacher's code</Td>
              <Td>Waiting name</Td>
              <Td>Waiting lastname</Td>
              <Td>Waiting dialing</Td>
              <Td>Waiting type of permissions</Td>
            </Tr>
          )}
        </Tbody>
      </Table>
    </TableContainer>
  );
};

export default TeacherDash;
