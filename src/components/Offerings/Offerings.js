import React from "react";
import "./Offerings.scss";
import "../../components/mediaQueris.scss";
import { Card } from "antd";
import { IoChevronForwardSharp } from "react-icons/io5";
import { Col, Container, Row } from "react-bootstrap";

export const Offerings = () => {
  const offersList = [
    {
      title: "Finances",
      description: "",
      image:
        "	https://jevelin.shufflehound.com/finances/wp-content/uploads/sites/26/2019/03/undraw_folder_39kl.jpg",
    },
    {
      title: "Consulting",
      description: "",
      image:
        "https://jevelin.shufflehound.com/finances/wp-content/uploads/sites/26/2019/07/we-offer-2-1.png",
    },
    {
      title: "Insurance",
      description: "",
      image:
        "	https://jevelin.shufflehound.com/finances/wp-content/uploads/sites/26/2019/03/insurance.jpg",
    },
  ];

  return (
    <div className="offerings-container">
      <h1>What we can offer</h1>
      <p>to increase financial security for your business</p>

      <Container className="offers-cards-bg">
        <Row>
          {offersList.map((each) => (
            <Col xs={12} md={12} lg={4}>
              <Card className="offer-card">
                <div className="title-container">
                  <IoChevronForwardSharp className="forward-icon" />
                  <h3 className="offer-title">{each.title}</h3>
                  <p>
                    Lorem ipsum dolor sit amet,consectetur adipiscing
                    elit.Mauris risus sem.
                  </p>
                </div>
                <div id="offer-image-container">
                  <img src={each.image} alt="" id="offer-image" />
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};
