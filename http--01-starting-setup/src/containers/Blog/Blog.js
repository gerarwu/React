import React, { Component } from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Posts from './Posts/Posts';
//import NewPost from './NewPost/NewPost';
import AsyncComponent from '../../hoc/asyncComponent';

import './Blog.css';

const AsyncNewPost = AsyncComponent( ()=> {
    return import ('./NewPost/NewPost');
});

class Blog extends Component {

    render () {

        return (
            <div className='Blog'>
                <nav>
                    <ul>
                        <li> <NavLink to='/posts' exact activeClassName='active' activeStyle={{ fontWeight: "bold" , textDecoration: 'underline'}}>Home</NavLink> </li>                        
                        <li> <NavLink to='/new-post' activeStyle={{ fontWeight: "bold", textDecoration: 'underline' }} >New Post</NavLink> </li>                        
                    </ul>                
                </nav>                

                
                <Switch>
                    <Route path='/new-post'  component={ AsyncNewPost } />
                    <Route path='/posts'  component={ Posts } />    
                    <Redirect from='/' to='/posts' />
                </Switch>

            </div>
        );
    }
}

export default Blog;