import styled from 'styled-components';

export const LinkRouter = styled.a`
  color: white;
  width: 100%;
  margin: 0;
  text-decoration: none;
`;

export const TeacherCardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(7, 60px);
  height: auto;
  width: 357px;
  background-color: #f5f6f8;
  align-items: center;
  padding: 30px;
  border-radius: 12px;
`;
