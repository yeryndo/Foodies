
import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert'
import RecipeService from '../Services/RecipeService';
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container';
import './Grid/recipeDisplay.css';
 
const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: window.innerWidth / 2, 
      marginLeft: 20,
      marginRight: 10,
      marginBottom: 30,
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }));
 
  export default function RecipeCard(props){
      const classes = useStyles();
      const [expandSelected, onPressExpand] = React.useState([]);
      const[recipes, setRecipe] = React.useState([])
      useEffect(() =>{
        RecipeService.getRecipes(props.meal, props.category).then((response) => {
             setRecipe(response.data)
        });
      })
      const handleExpandClick = (index) =>{
          let tab = expandSelected;
          if(tab.includes(index)){
              tab.splice(tab.indexOf(index), 1);
          }
          else{
              tab.push(index);
          }
          onPressExpand(tab);
 
      };
      const setExpanded = (index) =>{
          let tab = expandSelected;
          let boolResult = false;
          if(tab.includes(index)){
              boolResult = true;
              return boolResult;
          }
          else{
              return boolResult;
          }
      }
 
      return(
        <Container fluid>
            <Row>
                {recipes.map((recipe, index) => {
                    return <div key={index} className = "indvCard">
                        <Card className={classes.root}>
                            <CardHeader
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title={recipe.name}
                            />
                            <CardMedia 
                                className={classes.media}
                                image={recipe.imageUrl}
                                title={recipe.name}
                            />
                            <CardContent>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    {recipe.detail}
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: setExpanded(index),
                                    })}
                                    onClick={() => handleExpandClick(index)}
                                    aria-expanded={setExpanded(index)}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={setExpanded(index)} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Instructions:</Typography>
                                    <Typography paragraph>{recipe.instructions}</Typography>              
                                </CardContent>
                            </Collapse>
                        </Card>
                    </div>
            })}
            </Row>
        </Container>
      )
  }
 

