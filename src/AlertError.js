import React from 'react';
import Modal from 'react-bootstrap/Modal';

class AlertError extends React.Component{
  render () {
    return (
      <>
      <Modal onClick={this.props.hideModal} show={this.props.stateAlert}>
        <Modal.Header closeButton>
          {this.props.error}
        </Modal.Header>
        <Modal.Body>
          <h2>
            {this.props.errorResponse}
          </h2>
        </Modal.Body>
      </Modal>
      </>
    );
  };
};

export default AlertError;