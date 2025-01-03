import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";

const ResultScreen = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { isSuccess, message } = location.state || {};

  return (
    <Container className="result-screen mt-5 text-center">
      <Row>
        <Col>
          <h1>{isSuccess ? "Success!" : "Failure"}</h1>
          <p>{message || "An unexpected error occurred."}</p>
          <Button variant="primary" onClick={() => navigate("/home")}>
            Back to Home
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ResultScreen;
