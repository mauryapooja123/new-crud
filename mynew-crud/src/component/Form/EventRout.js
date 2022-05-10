// import React, { useState, useRef } from "react";
// import { Button, Modal, Table, Form, FormControl } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import AddForm from "../component/Form";

// const EventRout = (props) => {
//   const inputE1 = useRef("");
//   console.log(props.valuef, "ppppppppppppp");
//   //   console.log(props.handleEdit.data, "lkllll");
//   //   console.log(props.handleEdit.name, "name");
//   const getSearchTerm = () => {
//     // console.log(inputE1.current.value);
//     props.searchKeyWord(inputE1.current.value);
//   };

//   return (
//     <div>
//       <Button variant="primary" onClick={props.handleShow}>
//         Add Data
//       </Button>
//       <Modal show={props.show} onHide={props.handleClose}>
//         <Modal.Header closeButton>
//           <Modal.Title>
//             {props.edit ? "Edit User" : props.add ? "Add User" : "View User"}
//           </Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <AddForm
//             value={props.valuef}
//             handleChange={props.handleChange}
//             onSubmit={props.edit ? props.onHandleEdit : props.onSubmit}
//           />
//         </Modal.Body>
//         <Modal.Footer>
//           <Button variant="secondary" onClick={props.handleClose}>
//             Close
//           </Button>
//           <Button variant="primary" onClick={props.handleClose}>
//             Save Changes
//           </Button>
//         </Modal.Footer>
//       </Modal>
//       {/ Listing /}
//       <Form className="d-flex">
//         <FormControl
//           ref={inputE1}
//           type="search"
//           placeholder="Search"
//           className="me-2"
//           aria-label="Search"
//           value={props.term}
//           onChange={getSearchTerm}
//         />
//         <Button variant="outline-success">Search</Button>
//       </Form>

//       <Table striped bordered hover size="sm">
//         <thead>
//           <tr>
//             <th>#</th>
//             <th>Name</th>
//             <th>Location </th>
//             <th>Destination</th>
//           </tr>
//         </thead>
//         <tbody>
//           {props.users.map((data, i) => {
//             return (
//               <tr key={i}>
//                 <td>{data.id}</td>
//                 <td>{data.name}</td>
//                 <td>{data.location}</td>
//                 <td>{data.destination}</td>
//                 <td>
//                   <Button onClick={() => props.handleEdit(data.id)}>
//                     Edit
//                   </Button>
//                 </td>
//                 <td>
//                   <Button onClick={() => props.handleView(data.id)}>
//                     View
//                   </Button>
//                 </td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </Table>
//     </div>
//   );
// };

// export default EventRout;
