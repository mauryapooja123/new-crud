import { useEffect, useState } from "react";
import Home from "../pages/Home";
import axios from "axios";

function Parent() {
  useEffect(() => {
    getData();
  }, []);
  const [show, setShow] = useState(false);
  const [edit, setEdit] = useState(false);

  const [user, setUser] = useState({
    name: "",
    number: "",
    email: "",
  });

  const [allData, setAllData] = useState([]);

  const handleShow = () => {
    setShow(true);
    setEdit(false);
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    console.log(user, "data");
  };

  const handleSubmit = async () => {
    const res = await axios.post("http://localhost:3001/student", user);
    console.log(res, "lllll");
  };
  const getData = async () => {
    const res = await axios.get("http://localhost:3001/student");
    console.log(res.data, "getData");
    setAllData(res.data);
  };
  const handleEdit = async (data) => {
    setEdit(true);
    setShow(true);

    var result = allData.find(function (e) {
      return e.id == data;
    });

    // setValue(result);
    console.log(result, "idddddddddddd");
    setUser(result);
  };
  // console.log(valuef, "kkkkkkkk");
  const onHandleEdit = async () => {
    await axios
      .put(`http://localhost:3001/student/${user.id}`, user)
      .then((res) => {
        setAllData(res.data);
        setShow(false);
      });
  };
  const handleDelete = async (id) => {
    const res = await axios.delete(`http://localhost:3001/student/${id}`);
    console.log(res);
    getData();
  };

  return (
    <>
      <Home
        show={show}
        handleShow={handleShow}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        allData={allData}
        edit={edit}
        value={user}
        handleEdit={handleEdit}
        onHandleEdit={onHandleEdit}
        handleDelete={handleDelete}

        // userName={user}
      />
    </>
  );
}

export default Parent;
