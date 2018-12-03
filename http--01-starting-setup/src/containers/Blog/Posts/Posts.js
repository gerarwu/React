import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Post from '../../../components/Post/Post';

import './Posts.css';

class Posts extends Component{

    state = {
        posts: []        
    };

    componentDidMount(){
        
        axios.get( "/posts" )
        .then( response =>{
            const posts = response.data.splice(0, 4);
            const updatedPosts = posts.map(post => {
                return {
                    ...post,
                    author: "Gerardo M."
                }
            });            
            this.setState({ posts: updatedPosts });
        }).catch( error =>{
            console.log(error);            
        });

    }

    postSelectedHandler = ( id ) => {        
        console.log(id);
        this.setState({ postSelected: id });        
    }

    render(){

        let posts = <p class={{textAlign: 'center'}}> Somthing went wrong  =( !!!</p>;

        if(!this.state.error){
            posts = this.state.posts.map( post => { 
                return (
                    <Link to={'/' + post.id} key={post.id} >
                        <Post title={post.title} author={post.author} clicked={ () => this.postSelectedHandler(post.id) } />
                    </Link>
                )
            });
        }

        return(
            <section className="Posts">
                    { posts }
            </section>   
        );
    }
}

export default Posts;