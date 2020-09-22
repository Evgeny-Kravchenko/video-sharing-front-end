import React, { FC } from 'react';
import { Form } from '../../../../../styles/global-styled-components';
import ShareViedoFormProps from './types';

const ShareVideoForm: FC<ShareViedoFormProps> = (props: ShareViedoFormProps) => {
  const { onSetIsShareWindowShown } = props;
  return (
    <div className="modal d-block">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Sharing video</h5>
            <button type="button" className="close" onClick={() => onSetIsShareWindowShown(false)}>
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <Form></Form>
          </div>
          <div className="modal-footer">
            <button type="button" className="btn btn-primary">
              Share
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareVideoForm;
