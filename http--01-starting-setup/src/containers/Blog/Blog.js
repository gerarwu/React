import React, { Component } from 'react';
import { Route, NavLink, Switch } from 'react-router-dom';

import Posts from './Posts/Posts';
import NewPost from './NewPost/NewPost';
import FullPost from './FullPost/FullPost';
import './Blog.css';

class Blog extends Component {

    render () {

        return (
            <div className='Blog'>
                <nav>
                    <ul>
                        <li> <NavLink to='/' exact activeClassName='active' activeStyle={{ fontWeight: "bold" , textDecoration: 'underline'}}>Home</NavLink> </li>                        
                        <li> <NavLink to='/new-post' activeStyle={{ fontWeight: "bold", textDecoration: 'underline' }} >New Post</NavLink> </li>                        
                    </ul>                
                </nav>                

                <Route path='/' exact component={ Posts } />
                <Switch>
                    <Route path='/new-post' exact component={ NewPost } />
                    <Route path='/:id' exact component={ FullPost } />
                </Switch>

            </div>
        );
    }
}

export default Blog;