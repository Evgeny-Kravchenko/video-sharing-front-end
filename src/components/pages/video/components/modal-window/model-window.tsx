import React, { FC, ReactElement } from 'react';
import { useForm } from 'react-hook-form';
import { ModalWindowProps, ModalWindowForm } from './types';
import ValidationError from '../../../registration/components/registration-form/styled-components';

const ModalWindow: FC<ModalWindowProps> = (props: ModalWindowProps): ReactElement => {
  const { onSetModalWindow } = props;
  const { handleSubmit, register, errors } = useForm<ModalWindowForm>();
  const errorTitle = errors.title && <ValidationError>{errors.title.message}</ValidationError>;
  const errorDescription = errors.description && (
    <ValidationError>{errors.description.message}</ValidationError>
  );
  const errorFile = errors.file && <ValidationError>{errors.file.message}</ValidationError>;
  return (
    <div className="modal d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Add new video</h5>
            <button type="button" className="close" onClick={() => onSetModalWindow(false)}>
              <span>&times;</span>
            </button>
          </div>
          <form
            className="modal-body"
            onSubmit={handleSubmit((data: ModalWindowForm) => console.log(data))}
          >
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
                    ref={register({ required: 'You must specify a title' })}
                  />
                  {errorTitle}
                </div>
              </div>
              <div className="form-group">
                <div className="col-sm-12">
                  <label htmlFor="exampleTextarea">Example textarea</label>
                  <textarea
                    className="form-control"
                    id="description"
                    name="description"
                    rows={3}
                    placeholder="Enter video description"
                    ref={register({ required: 'You must specify a description' })}
                  ></textarea>
                  {errorDescription}
                </div>
              </div>
              <div className="form-group">
                <div className="col-12">
                  <label htmlFor="exampleInputFile">File input</label>
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
                Add video
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
