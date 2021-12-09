
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Home';
import User from './User';
import Todo from './Post';
import TodoDetail from './TodoDetail';

const UserParent = () => {
    return(
        <>

        <Router>
            <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/todo" >Todo</Link></li>
            </ul>
            <Route exact path="/" component= {Home} />
            <Route  path = "/user/:id" component = {User} />
            <Route exact path="/todo" component={Todo}/>
            <Route  exact path="/todo/:id" component={TodoDetail}/>

        </Router>
        </>
    );
};
export default UserParent;