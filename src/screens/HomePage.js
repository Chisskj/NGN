import React, { useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { useNavigate } from "react-router-dom";
import GiftCode from "../components/GiftCode";
import "./HomePage.css";

const HomePage = ({ setSelectedGiftCode, searchTerm }) => {
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
      model_name: "Nap VIP B basic1",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
    {
      model_code: "VIP_B_basic3",
      model_name: "Nap VIP B basic1",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
    {
      model_code: "VIP_B_basic4",
      model_name: "Nap VIP B basic1",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
    {
      model_code: "VIP_B_basic5",
      model_name: "Nap VIP B basic1",
      description: "Mua trên 20 gamecode VIP_B sẽ được chiết khấu 7%",
      discount: "7",
      valid_date: "2025-12-13T21:52:37.000+00:00",
    },
  ];
  const filteredCodes = gameCodes.filter(
    (code) =>
      code.model_code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.model_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      code.description.toLowerCase().includes(searchTerm.toLowerCase())
  );
  const [hotCodes, setHotCodes] = useState(gameCodes.slice(0, 3));
  const [currentIndex, setCurrentIndex] = useState(0);

  const navigate = useNavigate();

  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % gameCodes.length;
    setHotCodes([
      gameCodes[nextIndex],
      gameCodes[(nextIndex + 1) % gameCodes.length],
      gameCodes[(nextIndex + 2) % gameCodes.length],
    ]);
    setCurrentIndex(nextIndex);
  };

  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + gameCodes.length) % gameCodes.length;
    setHotCodes([
      gameCodes[prevIndex],
      gameCodes[(prevIndex + 1) % gameCodes.length],
      gameCodes[(prevIndex + 2) % gameCodes.length],
    ]);
    setCurrentIndex(prevIndex);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={12}>
          <h3>Hot Game Codes</h3>
          <div className="d-flex justify-content-center">
            <TransitionGroup className="d-flex">
              {hotCodes.map((giftCode, index) => (
                <CSSTransition key={index} timeout={500} classNames="slide">
                  <Card
                    className="mx-2"
                    style={{ width: "18rem" }}
                    onClick={() => {
                      setSelectedGiftCode(giftCode);
                      navigate("/purchase");
                    }}
                  >
                    <GiftCode giftCode={giftCode} />
                  </Card>
                </CSSTransition>
              ))}
            </TransitionGroup>
          </div>
          <div className="d-flex justify-content-center mt-4">
            <Button variant="secondary" onClick={handlePrev} className="px-3 mx-3">
              Prev
            </Button>
            <Button variant="secondary" onClick={handleNext} className="px-3 mx-3">
              Next
            </Button>
            </div>
        </Col>
      </Row>

      <hr />
      <Row>
        <Col md={12}>
          <h3>Game Codes List</h3>
          <Row>
            {filteredCodes.length > 0 ? (
              filteredCodes.map((giftCode, index) => (
                <Col md={4} key={index}>
                  <Card
                    className="mx-2"
                    style={{ width: "18rem" }}
                    onClick={() => {
                      setSelectedGiftCode(giftCode);
                      navigate("/purchase");
                    }}
                  >
                    <GiftCode giftCode={giftCode} />
                  </Card>
                </Col>
              ))
            ) : (
              <Col md={12}>
                <p>Không tìm thấy kết quả nào.</p>
              </Col>
            )}
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default HomePage;
