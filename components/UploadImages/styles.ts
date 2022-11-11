import styled from 'styled-components';

export const UploadPhotoMainContainer = styled.section`
  display: grid;
  justify-content: center;
  align-items: center;
  height: 90vh;
`;

export const UploadPhotoMain = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  row-gap: 56px;

  @media (min-width: 992px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 150px;
  }
`;

export const UploadPhotoCardContainer = styled.div`
  display: grid;
  grid-template-rows: 230px;
  box-shadow: -17px 17px 15px 0px rgba(0, 0, 0, 0.1);

  @media (min-width: 992px) {
    grid-template-columns: 300px;
    grid-template-rows: 230px 150px;
    grid-auto-rows: 38px;
  }
`;

export const UploadPhotoCardFigure = styled.figure`
  display: none;

  @media (min-width: 992px) {
    display: block;
    margin: 0;
    width: 100%;
    height: 182px;
    align-self: center;
    justify-self: center;
    text-align: center;
  }
`;

export const UploadPhotoCardPhoto = styled.img`
  width: 185px;
  height: 100%;
`;

export const UploadPhotoCardInfo = styled.form`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 70px);
  align-self: center;
  justify-self: center;

  @media (min-width: 992px) {
    justify-content: center;
    align-items: center;
  }
`;

export const UploadPhotoCardLabel = styled.label`
  position: relative;
  display: inline-block;
  cursor: pointer;
  height: 2.5rem;
`;

export const UploadPhotoCardInput = styled.input`
  margin: 0;
  opacity: 0;
  width: 100%;
`;

export const UploadPhotoCardSpan = styled.span`
  position: absolute;
  top: 0;
  right: 20px;
  left: 20px;
  z-index: 5;
  height: 1.5rem;
  padding: 0.5rem 1rem;
  line-height: 1.5;
  color: #555;
  background-color: #fff;
  border: 0.075rem solid #ddd;
  border-radius: 0.25rem;
  box-shadow: inset 0 0.2rem 0.4rem rgba(0, 0, 0, 0.05);
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &::after {
    content: 'Choose a photo...';
  }

  &::before {
    position: absolute;
    top: -0.075rem;
    right: -0.075rem;
    bottom: -0.075rem;
    z-index: 6;
    display: block;
    content: 'Browse';
    height: 1.5rem;
    padding: 0.5rem 1rem;
    line-height: 1.5;
    color: #555;
    background-color: #eee;
    border: 0.075rem solid #ddd;
    border-radius: 0 0.25rem 0.25rem 0;
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
  align-self: center;
  justify-self: center;
`;

export const Message = styled.span`
  align-self: start;
  justify-self: center;
`;
