import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './Grid/recipeDisplay.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import RecipeService from '../Services/RecipeService';

class RecipeComponent extends React.Component {
    
    constructor(props){
        super(props)
        this.state = {            
            recipes:[],
            meal: this.props.meal,
            category: this.props.category
        }
    }

    componentDidMount(){
        RecipeService.getRecipes(this.state.meal, this.state.category).then((response) => {
            this.setState({ recipes: response.data})
        });
    }

    render(){
        return(
            <div>
                <Container fluid>
                    <Row>
                        {this.state.recipes.map((recipe, index) => {
                            return <div className = "indvCard">
                                <Col>
                                    <CardDeck>
                                        <Card>
                                            <Card.Img variant="top" src={recipe.imageUrl} />
                                            <Card.Body>
                                                <Card.Title>{recipe.name}</Card.Title>
                                                    <Card.Text>
                                                        {recipe.detail}
                                                    </Card.Text>                        
                                            </Card.Body>
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

export default RecipeComponent