import React, { Component } from 'react';
import fire from './fire';
import logo from './new_ideas_slogan.jpg';
import './Beverage.css';

class Beverage extends Component {
  render() {
    return (
      <div className = "drink">
        <b>{this.props.name}</b>
        <div className = "Selection">
          <input type = "radio" name = {this.props.status} value = "keep"/><label> Keep<br/></label>
          <input type = "radio" name = {this.props.status} value = "toss"/><label> Toss</label>
        </div>
      </div>
    );
  }
}

export default Beverage;
