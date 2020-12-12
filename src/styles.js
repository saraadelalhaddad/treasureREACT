import styled, { createGlobalStyle } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const GlobalStyle = createGlobalStyle`
  body {
    color: #006d77;
    background-color: #edf6f9;
  }
  p{
    color : #edf6f9;
  }
`;

export const ListWrapper = styled.div`
  align-items: center;
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
`;

export const AuthButtonStyled = styled.button`
  font-size: 1em;
  padding: 0.25em 1em;
  margin-left: 0.5em;
  border-radius: 3px;
  background-color: ${(props) => props.theme.pink};
  color: ${(props) => props.theme.backgroundColor};
`;

export const CreateButtonStyled = styled.button`
  color: ${(props) => props.theme.backgroundColor};
  background-color: ${(props) => props.theme.mainColor};

  &:hover {
    color: ${(props) => props.theme.mainColor};
    background-color: ${(props) => props.theme.backgroundColor};
  }
`;

export const Title = styled.h1`
  text-align: center;
  color: purple;
`;
