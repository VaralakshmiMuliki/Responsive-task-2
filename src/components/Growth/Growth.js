import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Growth.scss";
import "../../components/mediaQueris.scss";

export const Growth = () => {
  const benefits = [
    {
      image:
        "https://jevelin.shufflehound.com/finances/wp-content/uploads/sites/26/2019/07/benifits-1.png",
      title: "Increasing Value",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus idhendrerit risus. Nam vel eleifend arcu. Curabitur rutrum lorem arcu, dapibus fringilla dolor aliquet ",
    },
    {
      image:
        "	https://jevelin.shufflehound.com/finances/wp-content/uploads/sites/26/2019/07/benifits-2.png",
      title: "Optimal Vision",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];
  return (
    <Container className="growth-container">
      <Row>
        <Col xs="12" md="12" lg="4" className="benefits-column">
          <h2 className="benefit-title ">
            Growing your business and helping with organising
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sed
            dui tempus, vestibulum tellus a gravi
          </p>
          <button className="contact-btn">Contact Us</button>
        </Col>
        {benefits.map((each) => (
          <Col xs="12" md="12" lg="4" className="benefits-column">
            <img src={each.image} alt="growth img" />
            <h1 className="benefit-title ">{each.title}</h1>
            <p>{each.description}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
};
