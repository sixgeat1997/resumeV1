import React from 'react'
import { Row, Divider } from "antd"
// import { BioContainer, DividerHeader } from "./styles"
import Mysql from "../components/photo/sql.png";
import Ml from "../components/photo/ml.png";


function Skill() {
    const skill = 'Skills',
        skills = '</Skills>'


    return (
        <>
            <div className="innerLine">

                <Divider>

                    <h1> {skill} </h1>
                    {/* <DividerHeader>Skills</DividerHeader> */}
                </Divider>
                <Divider>
                    <h3>Intermediate</h3>


                    {/* <DividerHeader>Expert</DividerHeader> */}
                </Divider>
                <Row md={8} type="flex" justify="space-around">
                    <i className="fab fa-3x fa-node-js" />
                    <i className="fab fa-3x fa-css3-alt" />
                    <i className="fab fa-3x fa-git" />


                </Row>
                <Row md={8} type="flex" justify="space-around" >
                    <img src={Ml} id="Ml" />
                    <i className="fab fa-3x fa-react" />
                    <i className="fab fa-3x fa-js"></i>
                </Row>



                <Divider>
                    <h3>Interesting</h3>


                    {/* <DividerHeader>Intermediate</DividerHeader> */}
                </Divider>

                <Row type="flex" justify="space-around">
                    <i class="fab fa-3x fa-vuejs" />
                    {/* <img src={go} alt="Golang" height="66px" /> */}
                    <img src={Mysql} id="mysql" />
                </Row>



            </div>
        </>
    )
}

export default Skill