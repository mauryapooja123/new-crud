// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import EventRout from "./EventRout";

// const EventRouteParent = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   // search
//   const [edit, setEdit] = useState(false);
//   const [view, setView] = useState(false);
//   const [show, setShow] = useState(false);
//   const [valuef, setValue] = useState({
//     name: "",
//     location: "",
//     destination: "",
//   });
//   //   const [isOpen, setIsOpen] = useState(false);
//   const handleClose = () => setShow(false);

//   const handleShow = () => {
//     setShow(true);
//     setEdit(false);
//     setAdd(false);
//   };

//   useEffect(() => {
//     getData();
//   }, []);

//   const [add, setAdd] = useState(false);
//   const [formError, setFormError] = useState({});
//   const [users, setUser] = useState([]);
//   const [data, setData] = useState([]);

//   const handleChange = (e) => {
//     console.log(e.target.value, "************");
//     const { name } = e.target;
//     const { value } = e.target;
//     setValue({ ...valuef, [name]: value });
//     setFormError({});
//   };

//   const onSubmit = async () => {
//     const res = await axios.post("http://localhost:3001/event", valuef);
//     console.log(res, "lllll");
//   };

//   const getData = async () => {
//     const res = await axios.get("http://localhost:3001/event");
//     console.log(res.data, "lllll");
//     setUser(res.data);
//   };

//   const handleEdit = async (data) => {
//     setEdit(true);
//     setShow(true);

//     var result = users.find(function (e) {
//       return e.id == data;
//     });

//     setValue(result);
//     console.log(result);
//   };
//   console.log(valuef, "kkkkkkkk");

//   const handleView = async (data) => {
//     setView(true);
//     setShow(true);
//     var resultView = users.find(function (e) {
//       return e.id == data;
//     });
//     console.log(resultView, "resultView");
//   };

//   const onHandleEdit = () => {
//     axios
//       .put(`http://localhost:3001/event/${valuef.id}`, valuef)
//       .then((res) => {
//         setValue(res.data);
//         setShow(false);
//       });
//   };

//   // const searchHandler = (searchTerm) => {
//   //   setSearchTerm(searchTerm);
//   //   if (searchTerm !== "") {
//   //     const newContactList = contacts.filer((contact) => {
//   //       return object
//   //         .values(contact)
//   //         .join("")
//   //         .toLowerCase()
//   //         .includes(searchTerm.toLowerCase);
//   //     });
//   //     setSearchResults(newContactList);
//   //   } else {
//   //     setSearchResults(contacts);
//   //   }
//   // };
//   return (
//     <div>
//       Hello
//       <EventRout
//         show={show}
//         handleChange={handleChange}
//         onSubmit={onSubmit}
//         handleClose={handleClose}
//         handleShow={handleShow}
//         users={users}
//         edit={edit}
//         add={add}
//         valuef={valuef}
//         onHandleEdit={onHandleEdit}
//         handleEdit={handleEdit}
//         term={searchTerm}
//         handleView={handleView}
//         // searchKeyWord={searchHandler}
//       />
//     </div>
//   );
// };

// export default EventRouteParent;
