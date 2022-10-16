import styled from 'styled-components';

export const TableContainer = styled.section`
  overflow: scroll;
  display: block;
  margin: 80px 0;

  @media screen and (min-width: 992px) {
    display: grid;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    overflow: hidden;
    height: auto;
    margin: 100px 0;
  }
`;

export const Button = styled.button`
  background-color: #18978f;
  border-radius: 5px;
  color: #fff;
  height: 40px;
  width: 118px;
  border-style: none;
  cursor: pointer;
  margin-left: ${(props) => props.theme.marginL};
`;

export const LinkRouter = styled.a`
  color: white;
  text-decoration: none;
`;
