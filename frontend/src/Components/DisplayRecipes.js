import React, { Component } from 'react';
import axios from 'axios';

class DisplayRecipes extends Component {
    state = {
        posts: []
    };
    componentDidMount = () => {
        this.getSelected();
    }

    getSelected = () => {
        axios.get('http://localhost:4000/api')
            .then((response) => {
                const data = response.data;
                this.setState({ posts: data});
                console.log('Data has been received!');
            })
            .catch(() => {
                console.log('Data has NOT been received!!');
            });
    }

    displayPosts = (posts) => {
        if (!posts.length) return null;

        return posts.map((post, index) => (
            <div key ={index}>
                <h3>Selected ingredients:</h3>
                <p>{post._id}</p>
                <p>{post.ingredients}</p>
            </div>
        ));
    }

    render () {
        return (
            <div>
                <h2>Display Recipes</h2>
                <div>
                    {this.displayPosts(this.state.posts)}
                </div>                
            </div>
        )
    }
}

export default DisplayRecipes;