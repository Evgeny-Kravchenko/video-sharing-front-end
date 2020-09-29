import React, { FC } from 'react';

import icon from './error.png';

import { Wrapper, Image, Message } from './styled-components';

const ErrorIndicator: FC = () => (
  <Wrapper>
    <Image src={icon} alt="Error" />
    <Message>Something went wrong, but we have already started fixing it!</Message>
  </Wrapper>
);

export default ErrorIndicator;
