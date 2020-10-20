import React from "react";

import { Image, Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import IconData from "./dinnerIconData.json";
import "./screenDisplay.css";
function DinnerScreen() {
  return (
    <div>
      <Container fluid>
        <Row className="background">
          {IconData.map((iconDetail) => {
            return (
              <div>
                <Link to={iconDetail.url}>
                  <Image
                    src={iconDetail.imageSource}
                    roundedCircle
                    width="261"
                    height="270"
                  />
                </Link>
                <h3 className="title">{iconDetail.title}</h3>
              </div>
            );
          })}
        </Row>
        <Row className="title"></Row>
      </Container>
    </div>
  );
}

export default DinnerScreen;