import React, { FC } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';

import { shareVideoRequest } from '../../../../redux/actions';

import { Label } from '../../../../styles/global-styled-components';

import ShareViedoFormProps from './types';
import {
  getEmail,
  getErrorOfSharingVideoToUser,
  getIsSuccessOfSharingVideoToUser,
} from '../../../../redux/selectors';

const ShareVideoForm: FC<ShareViedoFormProps> = (props: ShareViedoFormProps) => {
  const { onSetIsShareWindowShown, title, id } = props;

  const isSuccess = useSelector(getIsSuccessOfSharingVideoToUser);
  const error = useSelector(getErrorOfSharingVideoToUser);
  const userEmailWhoShareVideo = useSelector(getEmail);

  const dispatch = useDispatch();
  const onSubmit = (data: { email: string }) => {
    dispatch(shareVideoRequest(data.email, id, userEmailWhoShareVideo));
  };

  const { register, errors, handleSubmit } = useForm<{ email: string }>();

  const errorMessage = errors.email && <p className="text-danger">{errors.email.message}</p>;
  const statusSharingVideo = isSuccess ? (
    <p className="text-success m-0 mr-2">The video shared successfully.</p>
  ) : null;
  const errorMessageOfSharing = error && <p className="text-danger m-0 mr-2">{error.message}</p>;
  return (
    <div className="modal d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sharing &quot;{title}&quot; video.</h5>
            <button type="button" className="close" onClick={() => onSetIsShareWindowShown(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <Label htmlFor="exampleInputEmail1">
                  Enter the email address of the person you want to share the video with:{' '}
                </Label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter email"
                  ref={register({ required: 'You must enter email.' })}
                />
                {errorMessage}
              </div>
              <div className="modal-footer d-flex align-items-center">
                {statusSharingVideo}
                {errorMessageOfSharing}
                <button type="submit" className="btn btn-primary">
                  Share
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareVideoForm;
