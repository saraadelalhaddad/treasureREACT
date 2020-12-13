import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #006d77;
    background-color: #edf6f9;
    text-align: center;
    align-items: center;
    justify-content: center;
   
  }
  p{
    color : #edf6f9;
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: block;
  text-align: center;
  margin-top: 50px;

  h3 {
    display: block;
    margin: 20px;
    color: #83c5be;
    text-align: center;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s;
    :hover {
      transform: scale(1.1);
    }
  }
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: #006d77;
  color: #edf6f9;
`;

export const CreateButtonStyled = styled.button`
  background-color: #006d77;
  color: #edf6f9;

  &:hover {
    background-color: #83c5be;
    color: #006d77;
  }
`;

export const ButtonStyled = styled.button`
  margin-right: auto;
  margin-left: auto;
  margin-top: 100px;
  width: 200px;
  hieght: 100px;

  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  border-color: #83c5be;
  background-color: #83c5be;
  color: #006d77;

  &:hover {
    background-color: #d8f3dc;
    color: #83c5be;
  }
`;

export const Title = styled.h1`
  text-align: center;
`;
