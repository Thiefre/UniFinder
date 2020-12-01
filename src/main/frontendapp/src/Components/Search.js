import React, { Component } from 'react';
import { Form, Input, Button, Card, Row, Col, Statistic  } from "react-bootstrap";
import View from './View';

export default class Search extends Component {


   constructor(props){
      super(props);
      this.state = {verbal: '', quantitative: ''};
      this.submitForm = this.submitForm.bind(this);
      this.view = React.createRef();
   }

   submitForm = event => {
      event.preventDefault();
      if(this.state.buttonPressed === true)
      {
         console.log(this.state.verbal)
         console.log(this.state.quantitative)
         this.updateView();
      }
       this.setState({
          buttonPressed: true
       });
   }

   updateView()
   {
      this.view.current.updateList(this.state.verbal, this.state.quantitative);
   }

   resetForm = () => {
      this.setState({verbal: '', quantitative: ''})
   }

  render() {
    return (
       <div>
      <section id="search">
            <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h6 style = {{color: 'white'}}>Search by GRE Scores</h6>
                </Card.Header>
                <Card.Body>
                  <Form onReset = {this.resetForm} onSubmit = {this.submitForm} id= "formId">
                     <Form.Group>
                        <Form.Label style = {{color: 'white'}}>Verbal Score</Form.Label>
                        <Form.Control 
                        autoComplete = "off"
                        name = "verbal"
                        type="number"
                        value = {this.state.verbal}
                        onChange={e => this.setState({verbal: e.target.value})}
                        required
                        placeholder="Enter verbal score" />
                     </Form.Group>

                     <Form.Group>
                        <Form.Label style = {{color: 'white'}}>Quantitative Score</Form.Label>
                        <Form.Control 
                        autoComplete = "off"
                        name = "quantitative"
                        type="number"
                        value = {this.state.quantitative}
                        onChange={e => this.setState({quantitative: e.target.value})}
                        required
                        placeholder="Enter quantitative score" />
                     </Form.Group>
                     <Button type="submit">
                        Submit
                     </Button>
                     <Button variant="info" type="reset">
                        Reset
                     </Button>
                  </Form>
                </Card.Body>
              </Card>
            </Col>
          </Row>
      </section>
      {
         this.state.buttonPressed?
         <View scores = {this.state} ref = {this.view}/>
         :
         <div></div>
         }
      </div>
    );
    
  }
}
