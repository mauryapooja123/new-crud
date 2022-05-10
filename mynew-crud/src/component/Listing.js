import axios from "axios";
import React, { useEffect, useState } from "react";

function Listing() {
  const [allData, setAllData] = useState();
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const responce = await axios.get("http://localhost:3001/student");
    console.log(responce.data, "pppppp");
    setAllData(responce.data);
  };
  return (
    <>
      <p>API DATA</p>
      <table>
        <tr>
          <th>name</th>
          <th>number</th>
          <th>email</th>
        </tr>
        {allData &&
          allData.map((data, i) => (
            <tr key={i}>
              <td>{data.id}</td>
              <td>{data.name}</td>
              <td>{data.email}</td>
            </tr>
          ))}
      </table>
    </>
  );
}
export default Listing;
