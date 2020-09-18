import React, { FC, ReactElement } from 'react';

import { Wrapper } from '../../styles/global-styled-components';
import { IMessageFailureProps } from '../../interfaces';

const MessageFailure: FC<IMessageFailureProps> = (props: IMessageFailureProps): ReactElement => {
  const { header, title } = props;
  return (
    <Wrapper width="500px">
      <div className="card border-danger mb-3">
        <div className="card-header">{header}</div>
        <div className="card-body">
          <h4 className="card-title">{title}</h4>
        </div>
      </div>
    </Wrapper>
  );
};

export default MessageFailure;
