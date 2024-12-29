import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

const BuyModal = ({ show, onHide, giftCode, onBuy }) => {
    
  const [quantity, setQuantity] = useState(1);
  if (!giftCode) {
    return null; // If giftCode is null or undefined, do not render the modal
  }
  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const handleBuy = () => {
    onBuy(giftCode, quantity);
    onHide(); // Đóng modal sau khi mua
  };

  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Buy Gift Code</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>{giftCode.model_name}</h5>
        <p>{giftCode.description}</p>
        <p>Discount: {giftCode.discount}%</p>
        <Form.Group controlId="formBasicQuantity">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            type="number"
            min="1"
            value={quantity}
            onChange={handleQuantityChange}
          />
        </Form.Group>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={onHide}>
          Close
        </Button>
        <Button variant="primary" onClick={handleBuy}>
          Confirm Purchase
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default BuyModal;
