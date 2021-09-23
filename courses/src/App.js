import React from "react";
import Header from "./Components/Header";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home";
import Course from "./Components/Course";
import AllCourses from "./Components/AllCourses";
import AddCourse from "./Components/AddCourse";
import { Container, Row, Col  } from "reactstrap";
import Menus from "./Components/Menus";
import {
  BrowserRouter as Router,
  Route
} from "react-router-dom";

function App() {
  return (

    <div>
      <Router>
      <ToastContainer />
      {/* <Home />
      <AllCourses/>
      <AddCourse/> */}


      <Container>

        <Header />
        <Row>
          <Col md={4}>
          <Menus/>

          </Col>
          <Col md={8}>

            <Route exact path="/" component={Home}></Route>
            <Route path="/add-course" component={AddCourse}></Route>
            <Route path="/view-course" component={AllCourses}></Route>
            
          </Col>

        </Row>
      </Container>
      </Router>

    </div>

   
  );
}

export default App;
