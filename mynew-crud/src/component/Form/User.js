import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";

const User = () => {
  const [userData, setUserData] = useState("");

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    console.log(userData);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div>
          <p> Email</p>
          <input
            type="text"
            name="email"
            placeholder="email"
            value={userData.email}
            onChange={handleChange}
          ></input>
        </div>
        <div>
          <p> Password</p>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={userData.password}
            onChange={handleChange}
          ></input>
        </div>

        <button type="submit">submit</button>
      </form>
    </>
  );
};
export default User;
