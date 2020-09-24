import React, { FC, ReactElement } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from 'react-hook-form';

import { ModalWindowProps } from './types';
import { Video } from '../../../../../types';
import { State } from '../../../../../reducers/types';

import ValidationError from '../../../registration/components/registration-form/styled-components';
import Spinner from '../../../../local/spinner';

const ModalWindow: FC<ModalWindowProps> = (props: ModalWindowProps): ReactElement => {
  const {
    onSetModalWindow,
    isSuccessCallback,
    isLoadingCallback,
    isErrorCallback,
    action,
    title,
    descr,
  } = props;
  const loading: boolean = useSelector(isLoadingCallback);
  const isSuccess: boolean | null = useSelector(isSuccessCallback);
  const error: Error | null = useSelector(isErrorCallback);
  const userEmail: string = useSelector((state: State) => state.user.email);
  const dispatch = useDispatch();
  const { handleSubmit, register, errors } = useForm<Video>();
  const errorTitle = errors.title && <ValidationError>{errors.title.message}</ValidationError>;
  const errorDescription = errors.description && (
    <ValidationError>{errors.description.message}</ValidationError>
  );
  const errorFile = errors.file && <ValidationError>{errors.file.message}</ValidationError>;
  const onSubmit = (data: Video) => {
    dispatch(action({ data, userEmail }));
  };
  return (
    <div className="modal d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header d-flex justify-content-between align-items-center">
            <h5 className="modal-title m-0">{title || descr ? 'Edit' : 'Add new'} video</h5>
            {loading && <Spinner />}
            {isSuccess && (
              <p className="text-success my-0 mx-auto">
                The video is {title || descr ? 'edited' : 'added'} successfully.
              </p>
            )}
            {error && <p className="text-danger my-0 mx-auto">{error.message}</p>}
            <button type="button" className="close" onClick={() => onSetModalWindow(false)}>
              <span>&times;</span>
            </button>
          </div>
          <form className="modal-body" onSubmit={handleSubmit(onSubmit)}>
            <fieldset>
              <legend>Enter video information</legend>
              <div className="form-group">
                <label htmlFor="staticEmail" className="col-sm-2 col-form-label">
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
                  <label htmlFor="exampleTextarea">Enter video description</label>
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
                  <label htmlFor="exampleInputFile">Choose file</label>
                  <input
                    type="file"
                    className="form-control-file"
                    id="file"
                    name="file"
                    ref={register({ required: 'You must choose a file' })}
                  />
                  <small id="fileHelp" className="form-text text-muted">
                    Select a video file on your device to download it.
                  </small>
                  {errorFile}
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
