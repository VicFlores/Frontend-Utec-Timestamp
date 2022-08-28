import styled from 'styled-components';

export const HeaderContainer = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: center;
  height: 74px;
  background-color: #1f2937;
  color: #fff;

  @media screen and (max-width: 576px) {
    grid-template-columns: 1fr 1fr;
    height: ${(props) => (props.hidden ? '300px' : '74px')};
  }
`;

export const HeaderAppName = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  margin-left: 28px;
`;

export const BurgerMenuContainer = styled.div`
  display: none;

  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    justify-self: end;
    margin-right: 28px;
  }
`;

export const BurgerMenu = styled.button`
  display: none;

  @media screen and (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    font-size: 25px;
    margin: 0;
    width: 46px;
    height: 40px;
    border-radius: 10px;
    border-style: none;
  }
`;

export const LinkRouter = styled.a`
  color: white;
  margin: 0 15px;
  text-decoration: none;
`;

export const HeaderNavContainer = styled.div`
  justify-self: center;

  @media screen and (max-width: 576px) {
    display: ${(props) => (props.hidden ? 'grid' : 'none')};
    justify-content: center;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 3;
    gap: 32px;
    text-align: center;
  }
`;

export const HeaderButton = styled.button`
  background-color: #143f6b;
  border-radius: 5px;
  color: #fff;
  height: 42px;
  width: 120px;
  border-style: none;
  justify-self: center;
  cursor: pointer;

  @media screen and (max-width: 576px) {
    display: ${(props) => (props.hidden ? 'grid' : 'none')};
    justify-content: center;
    align-items: center;
    grid-column-start: 1;
    grid-column-end: 3;
  }
`;
