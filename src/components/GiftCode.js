import React from 'react';
import { Card } from 'react-bootstrap';
const GiftCode = ({ giftCode }) => {
  const { model_code, model_name, description, discount, valid_date } = giftCode;

  // Lấy ký tự cuối của model_code
  const lastChar = model_code.slice(-1); // Lấy ký tự cuối cùng
  const imageSrc = require('../images/' + lastChar + '.jpg');

  return (
    <Card className="mb-3" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={imageSrc} // Hiển thị ảnh động
        alt={model_code}
      />
      <Card.Body>
        <Card.Title>{model_name}</Card.Title>
        <Card.Text>{description}</Card.Text>
        <Card.Text>Discount: {discount}%</Card.Text>
        <Card.Text>Valid until: {new Date(valid_date).toLocaleDateString()}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default GiftCode;
