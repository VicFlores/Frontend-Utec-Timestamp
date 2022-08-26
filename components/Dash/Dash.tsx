import React from 'react';
import Layout from '../Layout/Layout';
import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from './styles';

const Dash = () => {
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
            <Tr>
              <Td>Vanessa Michelle</Td>
              <Td>Melendez Escobar</Td>
              <Td>Saturday, August 6th 2022, 10:20:11 am</Td>
              <Td>Normal</Td>
            </Tr>
            <Tr>
              <Td>Vic Ferman</Td>
              <Td>Flores Escobar</Td>
              <Td>Saturday, August 6th 2022, 10:20:11 am</Td>
              <Td>Normal</Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Layout>
  );
};

export default Dash;
