import React from 'react'
import { Row, Col, Divider, Descriptions } from 'antd'
import Typical from 'react-typical'

import '../App.css'
function Profile() {
    const proFile = 'Profile',
        proFiles = '</Profile>'
  
    return (
        <>

            <div className="innerLine">
                <Divider>
                    <h2>{proFile}</h2>
                </Divider>

                <Row>
                    <Col md={24}>
                        <Descriptions layout="vertical" >
                            <Descriptions.Item label="Name"> Chayanon Phonphet </Descriptions.Item>
                            <Descriptions.Item label="Nickname">Por </Descriptions.Item>
                            <Descriptions.Item label="Date of Birth"> 26 August 1997 </Descriptions.Item>
                            <Descriptions.Item label="Phone number"> (+66) 61 226 1510 </Descriptions.Item>
                            {/* <Descriptions.Item label="Age"> 22 </Descriptions.Item> */}


                        </Descriptions>

                        {/* <h3> Name : Chayanon Phonphet</h3>
                        <h3>Nickname : Por</h3>
                        <h3>Date of Brith : 26 August 1997</h3>
                        <h3>Age : 22 </h3> */}
                    </Col>
                </Row>
                <Row>
                    <Col md={24}>
                        <p>
                            I’m a person who like self-learners.
                            Always be on time.
                            I would like to learn about computer hardwares.
                            I want to learn more about IoT and web applications.
                    </p>

                    </Col>
                </Row>
                <Divider></Divider>

            </div>






        </>

    )
}

export default Profile