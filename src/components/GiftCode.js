import React from 'react';
import { Card } from 'react-bootstrap';
const GiftCode = ({ giftCode }) => {
  const { model_code, model_name, description, discount, valid_date } = giftCode;

  return (
    <Card className="mb-3" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`https://cellphones.com.vn/sforum/wp-content/uploads/2023/08/hinh-nen-gaming-13.jpg`} // Hiển thị hình ảnh
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
