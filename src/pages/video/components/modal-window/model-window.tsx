import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { ModalWindowProps } from './types';
import { Video } from '../../../../types';
import { State } from '../../../../redux/reducers/types';

import ValidationError from '../../../registration/components/registration-form/styled-components';
import Spinner from '../../../../components/spinner';
import { ButtonClose, SpinnerWrapper, StatusMessage } from './styled-components/modal-header';

const ModalWindow: FC<ModalWindowProps> = (props: ModalWindowProps): ReactElement => {
  const {
    onSetModalWindow,
    isSuccess,
    isLoading,
    isError,
    action,
    title,
    descr,
    id: videoId,
  } = props;

  const uid: string = useSelector((state: State) => state.user.uid);

  const dispatch = useDispatch();
  const onSubmit = (data: Video) => {
    const newVideo = {
      description: data.description,
      id: data.id,
      title: data.title,
      videoUrl: data.videoUrl,
    };
    dispatch(action({ newVideo, uid, videoId }));
  };

  const { handleSubmit, register, errors } = useForm<Video>();

  const errorTitle = errors.title && <ValidationError>{errors.title.message}</ValidationError>;
  const errorDescription = errors.description && (
    <ValidationError>{errors.description.message}</ValidationError>
  );
  const errorVideoUrl = errors.videoUrl && (
    <ValidationError>{errors.videoUrl.message}</ValidationError>
  );

  const successMessage = isSuccess && (
    <StatusMessage className="text-success my-0 mx-auto order-1">
      The video is {title || descr ? 'edited' : 'added'} successfully.
    </StatusMessage>
  );
  const errorMessage = isError && (
    <StatusMessage className="text-danger my-0 mx-auto order-1">{isError.message}</StatusMessage>
  );
  const spinner = isLoading && (
    <SpinnerWrapper className="mx-auto order-1">
      <Spinner />
    </SpinnerWrapper>
  );

  return (
    <div className="modal d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between align-items-center flex-wrap">
            <h5 className="modal-title order-0">{title || descr ? 'Edit' : 'Add new'} video</h5>
            {spinner}
            {successMessage}
            {errorMessage}
            <ButtonClose
              type="button"
              className="close order-2 m-0 p-0"
              onClick={() => onSetModalWindow(false)}
            >
              <span>&times;</span>
            </ButtonClose>
          </div>
          <form className="modal-body" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>Enter video information</legend>
              <div className="form-group">
                <label htmlFor="title" className="col-sm-2 col-form-label">
                  Title:
                </label>
                <div className="col-sm-12">
                  <input
                    type="text"
                    className="form-control-plaintext border pl-2"
                    id="title"
                    name="title"
                    maxLength={30}
                    placeholder="Enter video title"
                    defaultValue={title}
                    ref={register({ required: 'You must specify a title' })}
                  />
                  {errorTitle}
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <label htmlFor="description">Enter video description: </label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows={3}
                    placeholder="Enter video description"
                    defaultValue={descr}
                    ref={register({ required: 'You must specify a description' })}
                  ></textarea>
                  {errorDescription}
                </div>
              </div>
              <div className="form-group">
                <div className="col-12">
                  <label htmlFor="videoUrl">Video url: </label>
                  <input
                    type="url"
                    className="form-control-file border"
                    id="videoUrl"
                    name="videoUrl"
                    ref={register({ required: 'You must enter video url' })}
                  />
                  <small id="videoUrlHelp" className="form-text text-muted">
                    Input a video url.
                  </small>
                  {errorVideoUrl}
                </div>
              </div>
            </fieldset>
            <div className="modal-footer">
              <button type="submit" className="btn btn-primary">
                {title || descr ? 'Edit' : 'Add'} video
              </button>
              <button
                type="button"
                className="btn btn-secondary"
                onClick={() => onSetModalWindow(false)}
              >
                Close
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ModalWindow;
