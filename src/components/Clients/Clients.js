import React from "react";
import "./Clients.scss";
import "../../components/mediaQueris.scss";
import { Col, Row, Container } from "react-bootstrap";
import { RiDoubleQuotesL } from "react-icons/ri";

export const Clients = () => {
  const clientReview = [
    {
      name: "John Doe",
      designation: "Project Manager",
      company: "Corporate Inc",
    },
    {
      name: "Keith Kenning",
      designation: "CEO",
      company: "Finance for you Ltd",
    },
    {
      name: "Fillip Burton",
      designation: "Accountant",
      company: "Block Inc",
    },
  ];

  return (
    <div className="clients-container">
      <h1>Our Clients </h1>
      <p>for more than 45 years of colloboration</p>

      <Container>
        <Row>
          {clientReview.map((each) => (
            <Col xs="12" md="12" lg="4" className='client-review-column'>
              <RiDoubleQuotesL className="quote-icon" />
              <p>
                Lorem ipsum dolor sit amet, consec- tetur adipiscing elit. Cras
                sed dui tempus, vestibulum tellus a, gravida orci.
              </p>
              <p>
                Vivamus id hendrerit risus. Nam vel eleifend arcu. Curabitur
                rutrum lorem
              </p>
              <h3>{each.name}</h3>
              <p>{each.designation}</p>
              <p>{each.company}</p>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
