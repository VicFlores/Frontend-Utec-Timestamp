import styled from 'styled-components';

export const TableContainer = styled.section`
  overflow: scroll;
  display: block;
  margin: 80px 0;

  @media screen and (min-width: 992px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
    height: auto;
  }
`;

export const Table = styled.table`
  text-align: center;
  padding: 20px;
`;

export const Thead = styled.thead`
  background: #04293a;
  color: white;
`;

export const Tbody = styled.tbody`
  background-color: #f1f1f1;
`;

export const Tr = styled.tr`
  border-width: 0 0 1px 0;
  border-style: solid;
  border-color: #2C272E
  

  :hover {
    background: #dddddd;
  }
`;

export const Th = styled.th`
  padding: 10px;
`;

export const Td = styled.td`
  padding: 18px;
  color: #2f2e41;
`;

export const Button = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  color: #fff;
  height: 35px;
  width: ${(props) => props.theme.wth};
  border-style: none;
  cursor: pointer;
`;
