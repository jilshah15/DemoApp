import React from 'react';
import './App.css';
import {BrowserRouter,Switch,Link,Route} from 'react-router-dom';
import Home from './home.js';
import About from './about.js';
import Employee from './employeeregistration.js';

class Routing extends React.Component{
  render(){
    return(
        <div>
            <BrowserRouter>
            <nav class="navbar navbar-default">
			    <ul class="nav navbar-nav">
			      <li class="active"><Link to="/home">Home</Link></li>
			      <li><Link to="/aboutus">About Us</Link></li>
			      <li><Link to="/empregistration">Employee Registration</Link></li>
			    </ul>
			</nav>
			<Switch>
			      <Route exact path="/home" component={Home}/>
			      <Route path="/aboutus" component={About}/>
			      <Route path="/empregistration" component={Employee}/>

			</Switch>
  		    </BrowserRouter>
        </div>
      )
  }
}
export default Routing;
