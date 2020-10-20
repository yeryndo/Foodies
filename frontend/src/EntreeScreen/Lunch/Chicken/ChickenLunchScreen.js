import React from "react";
import ChickenData from './chickenLunchData';
import {Card, CardDeck, Container, Row , Col} from 'react-bootstrap';
import '../lunchRecipeDisplay.css'

function ChickenLunchScreen() {
  return (
    <div>
      <div className="header">
        <h3>Chicken Recipes</h3>
        <h5>Find recipes for steak kebabs, hamburgers and more!</h5>
      </div>
      <Container fluid>
        <Row>
        {ChickenData.map((postDetail, index) => {
                            return <div className = "indvCard">
                                <Col>
                                    <CardDeck>
                                        <Card>
                                            <Card.Img variant="top" src={postDetail.imageSource} />
                                            <Card.Body>
                                                <Card.Title>{postDetail.title}</Card.Title>
                                                    <Card.Text>
                                                        {postDetail.text}
                                                    </Card.Text>                        
                                            </Card.Body>
                                            <Card.Footer>
                                                <small className="text-muted">Last updated 3 mins ago</small>
                                            </Card.Footer>
                                        </Card>         
                                    </CardDeck>
                                </Col>
                            </div>
                        })}
                    </Row>
      </Container>
    </div>
  );
}

export default ChickenLunchScreen;