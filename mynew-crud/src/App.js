//import logo from "./logo.svg";
import "./App.css";
import Parent from "./component/Parent";
import { BrowserRouter, Route, Routes } from "react-router-dom";
//import LoginForm from "./component/Form/User";
//import User from "./component/Form/User";
//import Listing from "./component/Listing";
//import Home from "./pages/Home";
//import { Button } from "react-bootstrap";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Parent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
