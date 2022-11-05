import React, { Component } from "react";
import axios from "axios";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreateStudent extends Component {
  constructor(props) {
    super(props);

    this.onChangeStudentName = this.onChangeStudentName.bind(this);
    this.onChangeStudentEmail = this.onChangeStudentEmail.bind(this);
    this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);
    this.onSubmit = this.onSubmit.bind(this);

    this.state = {
      name: "",
      email: "",
      rollno: "",
    };
  }

  onChangeStudentName(e) {
    this.setState({ name: e.target.value }); //Snipet sst....  this.setState
  }
  onChangeStudentEmail(e) {
    this.setState({ email: e.target.value });
  }
  onChangeStudentRollno(e) {
    this.setState({ rollno: e.target.value });
  }
  onSubmit(e) {
    e.preventDefault(); //Snipet e.pd.... e.preventDefault

    const studentObject = {
      name: this.state.name,
      email: this.state.email,
      rollno: this.state.rollno,
    };

    axios
      .post("http://localhost:4000/students/create-student", studentObject)
      .then((res) => console.log(res.data));
    this.setState({ name: "", email: "", rollno: "" });
  }

  render() {
    return (
      <div class="form-wrapper">
        <Form onSubmit={this.onSubmit}>
          <Form.Group controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              type="text"
              value={this.state.name}
              onChange={this.onChangeStudentName}
              placeholder="Escriba su nombre completo"
            />
          </Form.Group>
          <Form.Group controlId="Email">
            <Form.Label>Correo Electronico</Form.Label>
            <Form.Control
              type="email"
              value={this.state.email}
              onChange={this.onChangeStudentEmail}
              placeholder="Escriba su correo electronico"
            />
          </Form.Group>
          <Form.Group controlId="Rollno">
            <Form.Label>Codigo</Form.Label>
            <Form.Control
              type="text"
              value={this.state.rollno}
              onChange={this.onChangeStudentRollno}
              placeholder="Escriba su codigo de estudiente"
            />
          </Form.Group>
          <Button
            variant="outline-info"
            size="lg"
            block="block"
            type="submit"
            className="mt-4"
          >
            Crear Estudiantes
          </Button>
        </Form>
      </div>
    );
  }
}
