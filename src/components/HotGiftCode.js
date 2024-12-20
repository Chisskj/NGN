import React from 'react';
import { Card } from 'react-bootstrap';

const HotGiftCode = ({ giftCode }) => {
  const { model_code } = giftCode; // Tạm sử dụng `model_code` làm đại diện cho hình ảnh

  return (
    <Card className="mx-2" style={{ width: '18rem' }}>
      <Card.Img
        variant="top"
        src={`https://via.placeholder.com/150?text=${model_code}`} // Sử dụng placeholder ảnh
        alt={model_code}
      />
    </Card>
  );
};

export default HotGiftCode;
