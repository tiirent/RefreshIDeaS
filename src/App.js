import React, { Component } from 'react';
import fire from './fire';
import logo from './new_ideas_slogan.jpg';
import Beverage from './Beverage'
import './App.css';

class App extends Component {

  getBeverages() {
    var drinks = fire.database().ref("beverages").orderByKey();
    drinks.once("value")
      .then(function(snapshot) {
        snapshot.forEach(function(childSnapshot) {
          var key = childSnapshot.key;
          var childData = childSnapshot.val();
          alert(key);
        })
      })
    return (
      <div className = "beverages">
        <Beverage
          name = {"Coke"}
          status = {"cokeStatus"}/>
        <Beverage
          name = {"Diet Coke"}
          status = {"dietCokeStatus"}/>
        <Beverage
          name = {"Diet Mtn Dew"}
          status = {"dietMtnDewStatus"}/>
        <Beverage
          name = {"Orange La Croix"}
          status = {"orangeLaCroixStatus"}/>
        <Beverage
          name = {"Lime La Croix"}
          status = {"limeLaCroixStatus"}/>
        <Beverage
          name = {"Fresca"}
          status = {"frescaStatus"}/>
      </div>
    );
  }
  addMessage(e) {
    e.preventDefault();
    fire.database().ref()
  }

  render() {
    return (
      <form className="App">
        <img src={logo} className="App-logo" alt="logo" align="top" />
        <header className="App-body">
          {this.getBeverages()}
          <button className = "Submit">Submit</button>
        </header>
      </form>
    );
  }
}

export default App;
