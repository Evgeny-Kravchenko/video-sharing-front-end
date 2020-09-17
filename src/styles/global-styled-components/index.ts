import styled, { createGlobalStyle } from 'styled-components';

const Form = styled.form`
  max-width: 500px;
  margin: 0 auto;
`;

const Label = styled.label`
  cursor: pointer;
`;

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`;

const Wrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`;

export { Form, Label, GlobalStyle, Wrapper };
