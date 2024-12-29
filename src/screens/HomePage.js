import React, { useState } from 'react';
import { Container, Row, Col, Button, Card } from 'react-bootstrap';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import GiftCode from '../components/GiftCode';
import BuyModal from '../components/BuyModal'; // Import BuyModal
import './HomePage.css'; // Define CSS transitions

const HomePage = () => {
  const gameCodes = [
    {
      model_code: "VIP_B_basic1",
      model_name: "Nap VIP B basic1",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
    {
      model_code: "VIP_B_basic2",
      model_name: "Nap VIP B basic2",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
    {
      model_code: "VIP_B_basic3",
      model_name: "Nap VIP B basic3",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
    {
      model_code: "VIP_B_basic4",
      model_name: "Nap VIP B basic4",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
    {
      model_code: "VIP_B_basic5",
      model_name: "Nap VIP B basic5",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
    // ... other game codes
  ];

  const [hotCodes, setHotCodes] = useState(gameCodes.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedGiftCode, setSelectedGiftCode] = useState(null); // Store the selected game code for purchase
  const [showModal, setShowModal] = useState(false); // Control modal visibility

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % gameCodes.length;
    const nextHotCodes = [
      gameCodes[nextIndex % gameCodes.length],
      gameCodes[(nextIndex + 1) % gameCodes.length],
      gameCodes[(nextIndex + 2) % gameCodes.length],
    ];
    setCurrentIndex(nextIndex);
    setHotCodes(nextHotCodes);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + gameCodes.length) % gameCodes.length;
    const prevHotCodes = [
      gameCodes[prevIndex % gameCodes.length],
      gameCodes[(prevIndex + 1) % gameCodes.length],
      gameCodes[(prevIndex + 2) % gameCodes.length],
    ];
    setCurrentIndex(prevIndex);
    setHotCodes(prevHotCodes);
  };

  const handleBuy = (giftCode) => {
    // Handle the purchase logic
    console.log(`Purchasing ${giftCode.model_name}`);
    setShowModal(false); // Close the modal after purchase
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h3>Hot Game Codes</h3>
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Button
              variant="secondary"
              onClick={handlePrev}
              className="border rounded-pill px-3"
            >
              Prev
            </Button>
            <Button
              variant="secondary"
              onClick={handleNext}
              className="border rounded-pill px-3"
            >
              Next
            </Button>
          </div>
          <div className="d-flex justify-content-center">
            <TransitionGroup className="d-flex">
              {hotCodes.map((giftCode, index) => (
                <CSSTransition key={index} timeout={500} classNames="slide">
                  <Card
                    className="mx-2"
                    style={{ width: '18rem' }}
                    onClick={() => {
                      setSelectedGiftCode(giftCode); // Set the selected game code
                      setShowModal(true); // Show the modal
                    }}
                  >
                    <GiftCode giftCode={giftCode} />
                  </Card>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
        </Col>
      </Row>

      <hr />

      <Row>
        <Col md={12}>
          <h3>Game Codes List</h3>
          <Row>
            {gameCodes.map((giftCode, index) => (
              <Col md={4} key={index}>
                <GiftCode giftCode={giftCode} />
              </Col>
            ))}
          </Row>
        </Col>
      </Row>

      {/* Buy Modal */}
      <BuyModal
        show={showModal}
        onHide={() => setShowModal(false)}
        giftCode={selectedGiftCode}
        onBuy={handleBuy}
      />
    </Container>
  );
};

export default HomePage;
