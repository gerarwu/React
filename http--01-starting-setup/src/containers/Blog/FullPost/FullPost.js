import React, { Component } from 'react';
import axios from 'axios';

import './FullPost.css';

class FullPost extends Component {

    state = {
        loadedPost: null
    };

    componentDidMount(){
        let postId = this.props.match.params.id
        console.log(postId);
        if( postId ) {
            //if( !this.state.loadedPost || (this.state.loadedPost && this.state.loadedPost.id !== this.props.id) ){
                axios.get("/posts/"+postId).then( response => {                   
                    this.setState({loadedPost: response.data});
                });
            //}            
        }
    }

    deletePostHandler = () =>{
        axios.delete("/posts/"+this.props.id).then( response => {
                    console.log(response);                   
        });
    }

    render () {
        let post = <p style={{textAlign: "center", color: "blue"}}>Please select a Post!</p>;

        if(this.props.id){
            post = <p style={{textAlign: "center", color: "blue"}}>Loading post...</p>;
        }

        if(this.state.loadedPost){
            post = (
                <div className="FullPost">
                    <h1>{ this.state.loadedPost.title }</h1>
                    <p>{ this.state.loadedPost.body }</p>
                    <div className="Edit">
                        <button onClick={ this.deletePostHandler } className="Delete">Delete</button>
                    </div>
                </div>
            );
        }

        return post;
    }
}

export default FullPost;