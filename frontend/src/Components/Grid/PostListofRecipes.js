import React, { Component } from "react";
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './recipeDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import PostData from './recipeData';

class PostListofRecipes extends Component {
    render() {
        return(
            <div>
                <Container fluid>
                    <Row>
                        {PostData.map((postDetail, index) => {
                            return <div className = "indvCard" key = {index}>
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
                                            </Card.Footer>
                                        </Card>         
                                    </CardDeck>
                                </Col>
                            </div>
                        })}
                    </Row>     
                </Container>
            </div>
        )
    }
}

export default PostListofRecipes;