import React from 'react'
import { Row, Divider } from "antd"
// import { BioContainer, DividerHeader } from "./styles"


function Skill() {
    const skill = 'Skills',
        skills = '</Skills>'


    return (
        <>
            <div className="innerLine">

                <Divider orientation="left">

                    <h1> {skill} </h1>
                    {/* <DividerHeader>Skills</DividerHeader> */}
                </Divider>
                <Divider>
                    <h3>Intermediate</h3>


                    {/* <DividerHeader>Expert</DividerHeader> */}
                </Divider>
                <Row type="flex" justify="space-around">
                    <i className="fab fa-3x fa-node-js" />
                    <i className="fab fa-3x fa-css3-alt" />
                    <i className="fab fa-3x fa-git" />
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
                </Row>



            </div>
        </>
    )
}

export default Skill