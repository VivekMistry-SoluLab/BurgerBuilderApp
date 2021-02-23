import React from 'react';
import Modal from '../../components/UI/Modal/Modal'
import Auxx from '../Auxx/Auxx'
import useHttpErrorHandler from '../../hooks/http-error-handler';

const WithErrorHandler = (WrappedComponent, axios) => {
  return props => {
    const [error, clearError] = useHttpErrorHandler(axios);
    return (
      <Auxx>
        <Modal show={error} modalClosed={clearError}>
          {error ? error.message : null}
        </Modal>
        <WrappedComponent {...props} />
      </Auxx>
    );
  };
};

export default WithErrorHandler;  