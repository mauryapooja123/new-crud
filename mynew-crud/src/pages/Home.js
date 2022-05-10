//import React, { useState } from "react";
import { Button, Modal, Form, Table } from "react-bootstrap";

function Home(props) {
  return (
    <>
      {/* {console.log(props.user, "props")} */}
      <Button variant="primary" onClick={props.handleShow}>
        Add Data
      </Button>
      <Modal show={props.show} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.edit ? "Edit User" : "Add User"}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={props.edit ? props.onHandleEdit : props.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="First Name"
                name="name"
                value={props.value.name}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicLastName">
              <Form.Label>number</Form.Label>
              <Form.Control
                type="text"
                placeholder="Last Name"
                name="number"
                value={props.value.number}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={props.value.email}
                onChange={props.handleChange}
              />
            </Form.Group>
            <Modal.Footer>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Modal.Footer>
          </Form>
        </Modal.Body>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Number</th>
            <th>Email</th>
          </tr>
        </thead>
        {props.allData.map((data, i) => (
          <tbody>
            <tr key={i}>
              <td>{data.name}</td>
              <td>{data.number}</td>
              <td>{data.email}</td>
              <td>
                <Button onClick={() => props.handleEdit(data.id)}>Edit</Button>

                <Button
                  variant="secondary"
                  onClick={() => props.handleDelete(data.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </>
  );
}
export default Home;
