import React, { FC } from 'react';
import { connect } from 'react-redux';

import { Wrapper } from '../../styles/global-styled-components';

import { IState } from '../../interfaces';
import { unauthorize } from '../../actions';

interface IAuthSuccessedProps {
  email: string;
  onUnauth: () => void;
}

const AuthSuccessed: FC<IAuthSuccessedProps> = (props: IAuthSuccessedProps) => {
  const { email, onUnauth } = props;
  return (
    <Wrapper width="500px">
      <div className="card border-success mb-3 p-2">
        <div className="card-header">You are authorized</div>
        <div className="card-body">
          <h4 className="card-title">You are authorized as a {email}</h4>
          <p className="card-text">
            Some quick example text to build on the card title and make up the bulk of the
            card`&apos;s content.
          </p>
        </div>
        <button type="submit" className="btn btn-primary align-self-center" onClick={onUnauth}>
          Log Out
        </button>
      </div>
    </Wrapper>
  );
};

const mapStateToProps = (state: IState) => {
  return {
    email: state.authUser.email,
  };
};

const mapDispatchToProps = {
  onUnauth: unauthorize,
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthSuccessed);
