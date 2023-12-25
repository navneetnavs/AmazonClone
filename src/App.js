import logo from './logo.svg';
import React, {useEffect} from "react"
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Payment from './Payment';
import Login from './Login';
import Order from './Order';
import Orders from './Orders';
import {auth} from "./firebase"
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import { useStateValue } from './Stateprovider';
import {loadStripe} from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

const promise = loadStripe("pk_test_51OQ9cMSHfcoKSX4gqfP19QCNgZMghkeXLysCOUb3bhvD0abDj1vyliJe1pAvDUBb4rGtY6RIwvBCjl4qkoTbzqlC00u6gNrP6l");

function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);
  





  return (
    <Router>
      <div className="App">
        
        <Switch>
        <Route path="/login">
        <Login />
        </Route>
        <Route path="/order">
        <Order/>
        </Route>
        <Route path="/checkout">
          <Header/>
           <Checkout/>
          </Route>
          <Route path="/payment">
          <Header/>
          <Elements stripe={promise}>
               <Payment/>
          </Elements>
          </Route>
          <Route path="/">
          <Header/>
           <Home/> 
          </Route>
        </Switch>
      
    </div>
    </Router>
    
  );
}

export default App;
