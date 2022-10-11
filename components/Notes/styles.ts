import styled from 'styled-components';

export const UserNoteContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 48px;
`;

export const UserNoteCardFormContainer = styled.div`
  text-align: center;
  display: grid;
  gap: 20px;

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
  }
`;

export const UserNoteCardImageContainer = styled.figure`
  text-align: center;
  margin: 0;
  display: none;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const Label = styled.label`
  font-size: 15px;
  padding: 8px 4px;
  margin: 0;
  text-align: left;
`;

export const Item = styled.div`
  display: grid;
`;

export const UserNoteCardForm = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 90px);
  height: auto;
  width: 357px;
  background-color: #f5f6f8;
  align-items: center;
  padding: 30px;
  border-radius: 12px;
`;

export const UserNoteCardFormTextArea = styled.textarea`
  margin-top: 4px;
  padding: 8px 5px;
  font-size: 15px;
  background-color: #f9f9f9;
`;
