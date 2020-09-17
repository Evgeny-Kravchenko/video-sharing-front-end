import React, { FC, ReactElement } from 'react';
import { Redirect } from 'react-router';
import { compose } from 'redux';
import { connect } from 'react-redux';

interface IVideoPageProps {
  isAuth: boolean;
}

const VideoPage: FC<IVideoPageProps> = (props: IVideoPageProps): ReactElement => {
  const { isAuth }: { isAuth: boolean } = props;
  if (!isAuth) {
    return <Redirect to="/auth" />;
  }
  return <div>Video page</div>;
};

const mapStateToProps = ({ isAuth }: { isAuth: boolean }) => {
  return {
    isAuth,
  };
};

export default compose(connect(mapStateToProps))(VideoPage);
