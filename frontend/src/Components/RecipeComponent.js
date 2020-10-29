import React, { useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import clsx from 'clsx';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardMedia from '@material-ui/core/CardMedia'
import CardContent from '@material-ui/core/CardContent'
import CardActions from '@material-ui/core/CardActions'
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors'
import FavoriteIcon from '@material-ui/icons/Favorite'
import ShareIcon from '@material-ui/icons/Share'
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
      const [expanded, setExpanded] = React.useState(false);
      const[recipes, setRecipe] = React.useState([])
      useEffect(() =>{
        RecipeService.getRecipes(props.meal, props.category).then((response) => {
             setRecipe(response.data)
        });
      })
      const handleExpandClick = () =>{
          setExpanded(!expanded);
      };
 
      return(
        <Container fluid>
            <Row>
                {recipes.map((recipe, index) => {
                    return <div className = "indvCard">
                        <Card className={classes.root}>
                            <CardHeader
                                action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                                }
                                title={recipe.name}
                                // subheader="October 22, 2020" {date}
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
                                {/* <IconButton aria-label="add to favorites">
                                    <FavoriteIcon />
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon />
                                </IconButton> */}
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon />
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
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
