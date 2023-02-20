import React from "react";
import "./Footer.scss";
import "../../components/mediaQueris.scss";
import { Col, Container, Row } from "react-bootstrap";
import { BsClock, BsMailbox, BsMap, BsPhone } from "react-icons/bs";

export const FinanceFooter = () => {
  const aboutIcons = [
    {
      icon: <BsMap className="about-icons" />,
      name: "Strred address 15, City",
    },
    {
      icon: <BsPhone className="about-icons" />,
      name: "+1234567890",
    },
    {
      icon: <BsMailbox className="about-icons" />,
      name: "emailAddress@company.com",
    },
    {
      icon: <BsClock className="about-icons" />,
      name: "9.00 - 18.00",
    },
  ];

  return (
    <Container fluid className="footer-container ">
      <Row className='p-2'>
        <Col xs="12" md="3" lg="3">
          <img
            src="https://jevelin.shufflehound.com/finances/wp-content/uploads/sites/26/2019/03/finances-logo.png"
            className="jevelin-logo mb-3 "
            alt=""
          />
          <p>
            We are ambitioned team that knows how to deliver the best results
            for our clients. We do our work in the highest priority
          </p>
        </Col>
        <Col xs="12" md="3" lg="3">
          <h4>Pages</h4>f
          <p>
            Insurace Planning
            <br />
            Consulting Best Experiences
          </p>
        </Col>
        <Col xs="12" md="3" lg="3">
          <h4>Useful Links</h4>
          <p>
            FAQ Cookies Privacy Policy
            <br />
            Experts
          </p>
        </Col>
        <Col xs="12" md="3" lg="3">
          <h4>About Us</h4>
          {aboutIcons.map((each) => (
            <div className="d-flex">
              {each.icon}
              <p>{each.name}</p>
            </div>
          ))}
        </Col>
      </Row>
    </Container>
  );
};
