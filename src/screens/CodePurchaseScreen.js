import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./CodePurchaseScreen.css";

const purchasedCodes1 = [
    { id: 1, name: "Game A", code: "ABC123", image: "1.jpg" },
    { id: 2, name: "Game B", code: "XYZ456", image: "2.jpg" },
    { id: 3, name: "Game C", code: "LMN789", image: "3.jpg" },
  ];
  
const CodePurchaseScreen = ({ purchasedCodes }) => {
  const springStyles = useSpring({
    from: { opacity: 0, transform: "translateY(20px)" },
    to: { opacity: 1, transform: "translateY(0)" },
    config: { tension: 200, friction: 15 },
  });
  const getImage = (imagePath) => {
    try {
      return require(`../images/${imagePath}`);
    } catch (err) {
      console.error("Error loading image:", imagePath, err);
      return require("../images/1.jpg"); // Fallback image
    }
  };
  return (
    <Container className="code-purchase-screen mt-5">
      <h2 className="text-center mb-4">Your Purchased Codes</h2>
      <Row>
        {purchasedCodes1.map((code, index) => (
          <Col key={code.id} md={4} className="mb-4">
            <animated.div style={springStyles}>
              <Card className="purchased-code-card shadow">
                <Card.Img
                  variant="top"
                  src={getImage(code.image)}
                  alt={code.name}
                  className="rounded"
                />
                <Card.Body>
                  <Card.Title>{code.name}</Card.Title>
                  <Card.Text>
                    <strong>Code:</strong> {code.code}
                  </Card.Text>
                </Card.Body>
              </Card>
            </animated.div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CodePurchaseScreen;
