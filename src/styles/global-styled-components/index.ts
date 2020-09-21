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
  max-width: ${(props: { width: string; margin: string }) => props.width};
  margin: ${(props: { width: string; margin: string }) => (props.margin ? props.margin : '0 auto')};
`;

export { Form, Label, GlobalStyle, Wrapper };
