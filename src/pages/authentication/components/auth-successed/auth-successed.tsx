import React, { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { Wrapper } from '../../../../styles/global-styled-components';

import { unauthorize } from '../../../../redux/actions';

import { getEmail } from '../../../../redux/selectors';

const AuthSuccessed: FC = () => {
  const email: string = useSelector(getEmail);
  const dispatch = useDispatch();
  const handleOnClick: () => void = () => dispatch(unauthorize());
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
        <button type="submit" className="btn btn-primary align-self-center" onClick={handleOnClick}>
          Log Out
        </button>
      </div>
    </Wrapper>
  );
};

export default AuthSuccessed;
