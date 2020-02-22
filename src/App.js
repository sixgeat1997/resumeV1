import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Row, Col, Menu, Icon } from 'antd'
import Profile from './components/Profile'
import Education from './components/Education'
import Experience from './components/Experience'
import Reff from './components/Reff'
import Skill from './components/Skill'
import "antd/dist/antd.css";
import { Router, Switch, Route } from "react-router-dom";
import Imgprofile from './components/Imgprofile'
import Contact from './components/Contact'

function App() {
  const [page, setPage] = useState({
    current: 'home',
    key: 0
  })


  const clickPage = (e) => {

    console.log(page);



  }




  return (

    <div className="out1 allFont">
      <div className="round">

        <Row>

          <Imgprofile />



        </Row>
        <Row style={{ paddingLeft: 150, paddingRight: 150 }}>
          <Col md={12}>
          <Skill />
          </Col>
          <Col md={12}>
            <Contact/>
          </Col>
        </Row>
        <Row>
          <Row>

            <Col md={12}>
              <Row>
                <Profile />

              </Row>
              <Row>
                <Education />

              </Row>
            </Col>
            <Col md={12} >
              <Experience />
            </Col>
           
          </Row>
        </Row>




      </div>

    </div>

    // <div className="out1 ">
    //   <div className="in1 round">



    //     <Row>
    //     </Row>
    //     <Row>
    //       <Col md={10} >
    //         <Row>
    //           <Profile />
    //         </Row>
    //         <Row>
    //           <Skill />

    //         </Row>
    //       </Col>
    //       <Col md={14}>
    //         <Row>
    //           <Education />
    //         </Row>
    //         <Row>
    //           <Experience />
    //         </Row>
    //         <Row>

    //         </Row>
    //       </Col>

    //     </Row>
    //     <Row>
    //       {/* <Reff /> */}
    //     </Row>

    //   </div>

    // </div>
  );
}

export default App;
