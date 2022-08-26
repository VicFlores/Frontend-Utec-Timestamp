import styled from 'styled-components';

export const AllowancesContainer = styled.section`
  display: grid;
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  height: 100vh;
`;

// Search teacher

export const LoginContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: auto;
`;

export const LoginFormContainer = styled.div`
  text-align: center;
`;
export const LoginCardFormContainer = styled.div`
  text-align: center;
  display: grid;
  gap: 20px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 303px 1fr;
    align-items: center;
    justify-content: center;
  }
`;

export const LoginCardImageContainer = styled.figure`
  text-align: center;
  margin: 0;
  display: none;

  @media (min-width: 992px) {
    display: flex;
  }
`;

export const LoginCardImage = styled.img`
  width: 303px;
  height: 150px;
`;

export const LoginCardFormTitle = styled.p`
  font-size: 20px;
  margin: 28px 0;
`;

export const LoginCardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 65px);
  height: auto;
  width: 266px;
  background-color: #f5f6f8;
  align-items: center;
  padding: 30px;
  border-radius: 12px;
`;

export const LoginCardFormInput = styled.input`
  border-bottom: 1px solid #b8b5ff;
  border-top: 0;
  border-left: 0;
  border-right: 0;
  padding: 8px 4px;
  outline-style: none;
  background: transparent;
  color: #484848;

  ::placeholder {
    color: #484848;
    opacity: 0.5;
  }
`;

export const Button = styled.button`
  background-color: #143f6b;
  border-radius: 5px;
  color: #fff;
  height: 42px;
  width: 185px;
  border-style: none;
  justify-self: center;
  cursor: pointer;
  font-size: 18px;
  margin-top: 15px;
`;

// Table of permissions

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
    height: 67vh;
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

export const TableButton = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  border-radius: 5px;
  color: #fff;
  height: 45px;
  width: ${(props) => props.theme.wth}px;
  border-style: none;
  cursor: pointer;
`;
