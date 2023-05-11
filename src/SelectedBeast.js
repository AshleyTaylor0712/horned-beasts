import React from "react";
import Modal from 'react-bootstrap/Modal'
import { Image } from 'react-bootstrap';

class SelectedBeast extends React.Component {
  render() {
    console.log(this.props.modalimage)
return (
    <Modal
      // show is a boolean, true or false, should the modal display
      show={this.props.show}
      // onHide is the method that will change the value of our boolean (show)
      onHide={this.props.handleCloseModal}
    >
      <Modal.Header closeButton>
        <Modal.Title>{this.props.description}</Modal.Title>
        <Modal.Body>
          <div>
          <Image
          src={this.props.modalimage}
          alt={this.props.description}
          />
          </div>
        </Modal.Body>
      </Modal.Header>
    </Modal>
);
  }
};


export default SelectedBeast
