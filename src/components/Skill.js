import React from 'react'
import { Row, Divider, Tooltip } from "antd"
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
                <Row  type="flex" justify="space-around" >
                    <Tooltip placement="topLeft" title="Machine learning">

                        <img src={Ml} id="Ml" />
                    </Tooltip>
                    <Tooltip title="React">

                        <i className="fab fa-3x fa-react" />
                    </Tooltip>
                    <Tooltip placement="topRight" title="JavaScript">

                        <i className="fab fa-3x fa-js"></i>
                    </Tooltip>
                </Row>

                <Row  type="flex" justify="space-around" style={{marginTop:10}}>
                    <Tooltip title="Node.js">

                        <i className="fab fa-3x fa-node-js" />
                    </Tooltip>
                    <Tooltip title="CSS">

                        <i className="fab fa-3x fa-css3-alt" />
                    </Tooltip>
                    <Tooltip title="Git">

                        <i className="fab fa-3x fa-git" />
                    </Tooltip>


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