import React, { Component } from 'react';
import fire from './fire';
import logo from './new_ideas_slogan.jpg';
import Beverage from './Beverage'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {beverages: []};

    this.getData = this.getData.bind(this);
  }

  render() {
    return (
      <form className="App">
        <img src={logo} className="App-logo" alt="logo" align="top" />
        <header className="App-body">
          {this.getBeverages()}
          <label className = "Suggestions">Suggestions</label>
          <input type = "text" name = "suggestion"/>
          <button className = "Submit">Submit</button>
        </header>
      </form>
    );
  }

  getData() {
    var drinks = fire.database().ref("beverages").orderByKey();
    var beverageList = [];
    drinks.once("value", (snapshot) => {
      snapshot.forEach(function(childSnapshot) {
        var name;
        var vote;
        childSnapshot.forEach(function(grandchildSnapshot) {
          if (grandchildSnapshot.key == "name") {
            name = grandchildSnapshot.val();
          } else {
            vote = grandchildSnapshot.val();
          }
        });
        let bvg = {title: name, votes: vote};
        beverageList.push(bvg);
      });
      this.setState({beverages: beverageList});
    });
  }

  componentDidMount() {
    this.getData();
  }

  getBeverages() {
    return (
      <div className = "beverages">
        {this.state.beverages.map(beverage => <Beverage name = {beverage.title} votes = {beverage.votes}/>)}
      </div>
    );
  }
}

export default App;
