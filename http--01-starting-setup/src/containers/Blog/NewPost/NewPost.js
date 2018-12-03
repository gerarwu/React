import React, { Component } from 'react';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

import './NewPost.css';

class NewPost extends Component {
    
    state = {
        title: '',
        content: '',
        author: 'Gerardo',
        sended: false
    }

    addNewPostHandler = () => {
        const data = { 
            title: this.state.title,
            content: this.state.content,
            author: this.state.author
        }
        
        axios.post("/posts/", data).then( repsonse => {
            console.log(repsonse);
            this.setState({sended: true});
        });
    }

    render () {

        let redirect = null;
        if(this.state.sended){
            redirect = <Redirect to='/posts' />
        }

        return (
            <div className="NewPost">
                { redirect }
                <h1>Add a Post</h1>
                <label>Title</label>
                <input type="text" value={this.state.title} onChange={(event) => this.setState({title: event.target.value})} />
                <label>Content</label>
                <textarea rows="4" value={this.state.content} onChange={(event) => this.setState({content: event.target.value})} />
                <label>Author</label>
                <select value={this.state.author} onChange={(event) => this.setState({author: event.target.value})}>
                    <option value="Max">Max</option>
                    <option value="Manu">Manu</option>
                </select>
                <button onClick={ this.addNewPostHandler } >Add Post</button>
            </div>
        );
    }
}

export default NewPost;