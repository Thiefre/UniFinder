import React, { Component, useEffect } from 'react';
import CollegeList from "./CollegeList"
import {Button} from "react-bootstrap";
class View extends Component {

  constructor(props) {
    super(props);
    this.state = {verbal: props.scores.verbal, quantitative: props.scores.quantitative};
    this.list = React.createRef();
  }
  
  //CREATE BUTTON TO SHOW ALL with state = {buttonAll: true}
  ViewAll = () =>
  {
    this.list.current.ListAllColleges();
  }

  updateList(verbal, quantitative)
  {
    console.log(verbal)
    console.log(quantitative)
    this.list.current.SearchByFields(verbal,quantitative);
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
  
  render() {

    return (
      <section id="view">
        <Button variant="primary" type="submit" onClick= {this.ViewAll}>
          View All
        </Button>
        <CollegeList scores = {this.state} ref = {this.list}/>
      </section>
    );
  }
}

export default View;
