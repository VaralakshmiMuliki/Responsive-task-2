import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import "./Deliver.scss";
import { BsSearch } from "react-icons/bs";
import { BiShieldAlt2 } from "react-icons/bi";
import { TfiWrite } from "react-icons/tfi";
import { Divider } from "antd";

export const Deliver = () => {
  const deliverBenifits = [
    { icon: <BsSearch />, title: "Transparency" },
    { icon: <BiShieldAlt2 />, title: "Protection" },
    { icon: <TfiWrite />, title: "Compliance" },
  ];
  return (
    <Container className="deliver-container">
      <Row>
        <Col xs={12} md={12} lg={6}>
          <h1 className="driven-header">Driven to deliver</h1>
          <h3 className="collaboration-header-style">Complete Collaboration</h3>

          {deliverBenifits.map((each) => (
            <div className="collaboration-container">
              <div className='benefit-icons'>{each.icon}</div>
              <div className="benefit-title-and-des">
                <h1>{each.title}</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris risus sem.
                </p>
              <Divider/>

              </div>
            </div>
          ))}
        </Col>
        <Col xs={12} md={12} lg={6} className="benefit-img-container">
          <img
            src="	https://jevelin.shufflehound.com/finances/wp-content/uploads/sites/26/2019/07/driven-to-deliver.png"
            alt=""
            width="100%"
          />
        </Col>
      </Row>
    </Container>
  );
};
