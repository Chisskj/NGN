import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { FaPlus, FaMinus, FaShoppingCart } from "react-icons/fa";

const PurchaseScreen = ({ selectedGiftCode, onBack }) => {
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (!selectedGiftCode) {
      navigate("/home");
    }
  }, [selectedGiftCode, navigate]);

  if (!selectedGiftCode) {
    return null;
  }

  const handleIncrease = () => setQuantity(Math.min(quantity + 1, 99));
  const handleDecrease = () => setQuantity(Math.max(1, quantity - 1));

  const handleConfirm = () => {
    const isSuccess = Math.random() > 0.2; // Giả lập xác suất thành công là 80%
    const message = isSuccess
      ? `You successfully purchased ${quantity} x ${selectedGiftCode.model_name} for $${quantity * 10}.`
      : `Purchase failed. Please try again later.`;
    navigate("/result", { state: { isSuccess, message } });
  };

  const totalPrice = quantity * 10;
  const lastChar = selectedGiftCode.model_code.slice(-1);
  const imageSrc = require("../images/" + lastChar + ".jpg");

  return (
    <Container className="purchase-screen mt-5">
      <Row>
        <Col md={6} className="offset-md-3">
          <Card className="p-3 shadow">
            <Row className="align-items-center">
              <Col md={4}>
                <img
                  src={imageSrc}
                  alt={selectedGiftCode.model_name}
                  className="img-fluid rounded"
                />
              </Col>
              <Col md={8}>
                <h4>{selectedGiftCode.model_name}</h4>
                <p>{selectedGiftCode.description}</p>
                <p>
                  <strong>Discount:</strong> {selectedGiftCode.discount}%
                </p>
                <p>
                  <strong>Valid Until:</strong>{" "}
                  {new Date(selectedGiftCode.valid_date).toLocaleDateString()}
                </p>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col
          md={6}
          className="offset-md-3 d-flex justify-content-between align-items-center"
        >
          <Button
            variant="outline-secondary"
            onClick={handleDecrease}
            disabled={quantity <= 1}
          >
            <FaMinus />
          </Button>
          <Form.Control
            type="number"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.min(Math.max(1, e.target.value), 99))
            }
            min={1}
            max={99}
            className="text-center"
            style={{ width: "80px" }}
          />
          <Button
            variant="outline-secondary"
            onClick={handleIncrease}
            disabled={quantity >= 99}
          >
            <FaPlus />
          </Button>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="offset-md-3 text-center">
          <h5>Total Price: ${totalPrice}</h5>
        </Col>
      </Row>

      <Row className="mt-4">
        <Col md={6} className="offset-md-3 d-flex justify-content-between">
          <Button variant="danger" onClick={onBack}>
            Cancel
          </Button>
          <Button variant="success" onClick={handleConfirm}>
            Confirm <FaShoppingCart />
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default PurchaseScreen;
