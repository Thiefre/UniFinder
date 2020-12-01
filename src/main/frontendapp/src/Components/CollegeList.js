import React, {Component} from 'react';
import {Card, Container, Row, Col} from 'react-bootstrap';
import axios from 'axios';

export default class CollegeList extends Component {

    constructor(props){
        super(props);
        this.state = {
            colleges: [],
            verbal: props.scores.verbal,
            quantitative: props.scores.quantitative,
            buttonAll: props.scores.buttonAll
        };
    }

    componentDidMount()
    {
        this.SearchByFields(this.state.verbal, this.state.quantitative)
    }

    ListAllColleges()
    {
      axios.get('http://localhost:8080/api/list/colleges')
      .then(res => res.data)
      .then((data) => {
          this.setState({colleges:data.colleges});
          this.setState();
      });
    }
    SearchByFields(newVerbal, newQuantitative)
    {
      axios.get('http://localhost:8080/api/search/colleges', {params: {verbal: newVerbal, quantitative: newQuantitative}})
      .then(res => res.data)
      .then((data) => {
          this.setState({colleges:data.colleges});
          this.setState();
      });
    }

    render() {
        
        return (
            <Container>
            <Row>
            <Col>
              <Card>
                <Card.Header>
                  <h6>Universities/Colleges</h6>
                </Card.Header>
                <Card.Body>
                  <table>
                    <thead>
                      <tr>
                        <th>
                          Name
                        </th>
                        <th>
                          Major
                        </th>
                        <th>
                          Verbal Score
                        </th>
                        <th>
                          Quantitative Score
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.colleges.map((colleges) => (
                            <tr key = {colleges.id}>
                                <td>{colleges.name}</td>
                                <td>{colleges.major}</td>
                                <td>{colleges.avgVerbal}</td>
                                <td>{colleges.avgQuantitative}</td>
                            </tr>
                        ))
                    }
                </tbody>
                  </table>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          </Container>
        );
    }
}