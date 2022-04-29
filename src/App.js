import './App.css';
import { useState } from 'react';
import { Container, Row, Col, Card, Table, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import userData from "./userData.json";

function App() {
  const [paragraph] = useState("       Write a program         to remove all the     extra spaces         from a        paragraph/string     ");
  const [output, setOutput] = useState("");
  const handleInputChange = (val) => {
    console.log('val', val);
    if (val) {
      if (val % 3 === 0 && val % 7 === 0) {
        setOutput("World ABC");
      }
      else if (val % 3 === 0) {
        setOutput("ABC");
      }
      else if (val % 7 === 0) {
        setOutput("World");
      }
      else {
        setOutput("");
      }
    }
    else {
      setOutput("");
    }
  }
  console.log('userData', userData);
  return (
    <div className="App">
      <Container>
        <Row style={{ marginTop: 20 }}>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Title>Write a program to remove all the extra spaces from a paragraph/string, consider below sample input, output strings</Card.Title>
                <Card.Text>Sample Input String : <pre>“{paragraph}”</pre></Card.Text>
                <Card.Text>Sample Output String : <pre>“{paragraph.replace(/\s+/g, ' ').trim()}”</pre></Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card>
              <Card.Body>
                <Card.Text>If a number is divisible by 7, then print “World”</Card.Text>
                <Card.Text>If a number is divisible by 3, then print  “ABC”</Card.Text>
                <Card.Text>If a number is divisible by both 7 and 3 then print “World ABC”</Card.Text>
                <Form.Control type="text" onChange={(e) => handleInputChange(Number(e.target.value))} placeholder="Type any number here" />
                <p><b> Output: {output} </b></p>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row style={{ marginTop: 20 }}>
          <Col md={12}>
            <Card>
              <Card.Body>
                <Card.Title>Design a Users grid in React, with fields First Name, Last Name, Email address.</Card.Title>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>First Name</th>
                      <th>Last Name</th>
                      <th>Email Address</th>
                    </tr>
                  </thead>
                  <tbody>
                    {userData.map((item, key) => {
                      return (
                        <tr>
                          <td>{++key}</td>
                          <td>{item.firstName}</td>
                          <td>{item.lastName}</td>
                          <td>{item.email}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </Table>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
