import React, { Component } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import StudentTableRow from "./StudentTableRow";
import Card from "react-bootstrap/Card";

export default class StudentList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      students: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:4000/students/")
      .then((res) => {
        this.setState({
          students: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  DataTable() {
    return this.state.students.map((res, i) => {
      return <StudentTableRow obj={res} key={i} />;
    });
  }

  render() {
    return (
      <div className="table-wrapper">
        <Card style={{ width: "44rem" }}>
          <Card.Img
            variant="top"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFhQovxHXuw9Eikb4a632_jI9zYI_O6dUrgA&usqp=CAU"
          />
        </Card>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Correo Electrónico</th>
              <th>Código</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>{this.DataTable()}</tbody>
        </Table>
      </div>
    );
  }
}
