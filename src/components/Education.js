import React from 'react'
import { Row, Col, Divider, Timeline } from 'antd'
import '../App.css'

function Education() {
    const edu = 'Education',
        edus = '</Education>'

    return (
        <><div className="innerLine">

            <Divider >
                <h2>{edu}</h2>
            </Divider>
            <Timeline>
                <Timeline.Item>
                    <Row>
                        <h2>2013 - 2016 </h2> <p> High school at Benjamarachutit Pattani school, Science & Mathmatics</p>
                    </Row>
                </Timeline.Item>
                <Timeline.Item>  <Row>
                    <h2>2016 - Present</h2>
                    <p>
                        Prince of Songkla University Phuket Campus Bachelor of Engineering,Computer Engineering.

                </p>
                </Row>
                </Timeline.Item>

            </Timeline>
            <Divider >

            </Divider>


        </div>

        </>
    )
}


export default Education