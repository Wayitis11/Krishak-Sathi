
import React, { Component } from 'react';
import {Switch,Route} from 'react-router-dom';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-confirm-alert/src/react-confirm-alert.css'
import ProductList from './Components/ProductList';
import Details from './Components/Details';
import Cart from './Components/Cart/Cart';
import Default from './Components/Default';
import Footer from './Components/Footer';
import Home from './Components/Home';
import Aboutus from './Components/Aboutus';
import Signup from './Components/Signup';
import Signin from './Components/Signin';

import Modal from './Components/Modal';
import Contact from './Components/Contact';

class App extends Component {
  
  render(){


    return (
     <React.Fragment>
      
       <Switch>
         <Route exact path="/"component={Home}/>
         <Route path ="/signup" component={Signup}/>
         <Route path="/signin"component={Signin}/>
         <Route path="/aboutus"component={Aboutus}/>
         <Route path="/contact"component={Contact}/>
         <Route path="/productlist" component={ProductList}/>
         <Route path="/details" component={Details}/>
         <Route path="/cart"component={Cart}/>
        
         <Route component={Default}/>
       </Switch>
       <Footer/>
       <Modal/>
    
     </React.Fragment>
    );

  }

}

export default App;
