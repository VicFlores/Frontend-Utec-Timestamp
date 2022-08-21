import styled from 'styled-components';

export const AboutAppMain = styled.section`
  background-color: #f2f2f2;
`;

/* Presentation */

export const AboutAppContainer = styled.section`
  align-items: center;
  background-image: url(https://res.cloudinary.com/vicflores11/image/upload/v1660772447/frontend-utec-timestamp/david-schultz-SrewPUfo2c0-unsplash_qfihiu.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 100px 125px auto;
  height: 495px;
  justify-content: center
  text-align: center;
`;

export const AboutAppTitle = styled.p`
  align-self: end;
  color: ${(props) => props.theme.color};
  font-size: 20px;
  font-weight: bold;
  margin: ${(props) =>
    props.theme?.marginTitle ? props.theme.marginTitle : '0'};
  text-align: center;
`;

export const AboutAppSubTitle = styled.p`
  color: ${(props) => props.theme.color};
  font-size: ${(props) =>
    props.theme?.fontSize ? props.theme.fontSize : '16px'};
  font-weight: normal;
  margin: ${(props) =>
    props.theme?.marginSubTitle ? props.theme.marginSubTitle : '0'};
  text-align: ${(props) =>
    props.theme?.textAlign ? props.theme.textAlign : 'justify'};
`;

export const AboutAppButtonContainer = styled.div`
  display: grid;
  justify-content: center;
  align-items: start;
  height: 100%;
  width: 100%;
`;

export const AboutAppButton = styled.button`
  color: white;
  text-align: center;
  background: #1f4690;
  font-size: 15px;
  border: none;
  padding: 15px 15px;
  border-radius: 6px;
  width: 116px;
`;

/* About App Main */

export const AboutAppMainContainer = styled.div`
  align-items: center;
  display: grid;
  grid-template-rows: 100px 150px auto;
  height: 495px;
  justify-content: center;
  justify-content: center;
`;

export const AboutAppMainImageContainer = styled.figure`
  margin: 0;
  text-align: center;
`;

export const AboutAppMainImage = styled.img`
  width: 226px;
  height: 200px;
  background-color: #2a3746;
`;

/* Technologies App */

export const AboutAppTechnologiesContainer = styled.section`
  display: grid;
  grid-template-rows: 100px auto;
  grid-template-columns: auto;
`;

export const AboutAppTitleTechnologies = styled.p`
  align-self: end;
  color: black;
  font-size: 18px;
  font-weight: bold;
  margin: 56px 0 0 20px;
`;

export const AboutAppTechnologies = styled.div`
  display: grid;
  justify-content: center;
  align-items: center;
  gap: 25px;

  &:nth-child(odd) {
    background: #e6e8ec;
  }
`;

export const AboutAppTechnologiesImageContainer = styled.figure`
  margin: 0;
  text-align: center;
  height: ${(props) => props.theme.height}px;
  width: ${(props) => props.theme.width}px;
  align-self: center;
  justify-self: center;
`;

export const AboutAppTechnologiesImage = styled.img`
  overflow: hidden;

  height: inherit;
  width: inherit;
`;
