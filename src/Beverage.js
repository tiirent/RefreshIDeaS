import React, { Component } from 'react';
import './Beverage.css';

class Beverage extends Component {
  render() {
    return (
      <div className = "drink">
        <b>{this.props.name}</b>
        <div className = "Selection">
          <input type = "radio" name = {this.props.name} value = "keep"/><label> Keep<br/></label>
          <input type = "radio" name = {this.props.name} value = "toss"/><label> Toss</label>
        </div>
      </div>
    );
  }
}

export default Beverage;
