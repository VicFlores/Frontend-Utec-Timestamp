import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 67px;
  background-color: #1f2937;
  color: white;
`;

export const AppNameContainer = styled.div`
  align-self: center;
  margin: 0 0 0 25px;
`;

export const AppName = styled.h3`
  margin: 0;
`;

export const NavContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 25px 0 0;

  @media screen and (max-width: 875px) {
    display: ${(props) => (props.hidden ? 'grid' : 'none')};
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 50px) repeat(2, 60px);
    grid-column-start: 1;
    grid-column-end: 3;
    justify-self: center;
    align-self: center;
    border-top: 0.5px solid white;
    height: 100%;
    width: 100%;
    margin: 0;
  }
`;

export const LinkRouter = styled.a`
  color: #ffffff;
  margin: 0 15px;
  text-decoration: none;

  @media screen and (max-width: 875px) {
    margin: 0;
    align-self: center;
    justify-self: center;
  }
`;

export const HeaderButtonContainer = styled.div`
  display: flex;
  align-self: center;
  justify-self: end;
`;

export const HeaderButton = styled.button`
  color: #2f2e41;
  margin: 0 25px 0 0;
  text-align: center;
  background: #cdf0ea;
  font-size: 1em;
  padding: 7px 23px;
  border-radius: 6px;
  width: 116px;

  @media screen and (max-width: 875px) {
    height: 45px;
    margin: 0;
    width: 116px;
    align-self: center;
    justify-self: center;
  }
`;
