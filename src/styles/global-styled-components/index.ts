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

interface WrapperProperty {
  width: string;
  margin: string;
}

const Wrapper = styled.div`
  max-width: ${(props: WrapperProperty) => props.width};
  margin: ${(props: WrapperProperty) => (props.margin ? props.margin : '0 auto')};
`;

export { Form, Label, GlobalStyle, Wrapper };
