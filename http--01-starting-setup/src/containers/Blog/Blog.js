import React, { Component } from 'react';
import axios from 'axios';

import Post from '../../components/Post/Post';
import FullPost from '../../components/FullPost/FullPost';
import NewPost from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {

    state = {
        posts: [],
        postSelected: null,
        error: false
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
            this.setState({error: true});
        });

    }

    postSelectedHandler = ( id ) => {        
        this.setState({ postSelected: id });        
    }

    render () {

        let posts = <p class={{textAlign: 'center'}}> Somthing went wrong  =( !!!</p>;

        if(!this.state.error){
            posts = this.state.posts.map( post => { 
                return <Post title={post.title} key={post.id} author={post.author} clicked={ () => this.postSelectedHandler(post.id) } />
            });
        }

        return (
            <div>
                <section className="Posts">
                    { posts }
                </section>
                <section>
                    <FullPost id={this.state.postSelected} />
                </section>
                <section>
                    <NewPost />
                </section>
            </div>
        );
    }
}

export default Blog;