import React from 'react'
import { Row, Divider, Timeline } from 'antd'
import '../App.css'

function Experience() {

    return (
        <><div className="innerLine" >
            <Divider >
                <h2>Experience</h2>
            </Divider>
            <Row>
                <Timeline>
                    <h2>Activity</h2>
                    <Timeline.Item>
                        <li> <h4>2016</h4>Volunteer Backpack Club</li>
                    </Timeline.Item>
                    <Timeline.Item>
                        <li><h4>2018</h4>Committee's Department of Computer Engineering.</li>
                    </Timeline.Item>
                    <Timeline.Item>
                        <li><h4>2019</h4>Vice President of Student Union </li>
                    </Timeline.Item>

                </Timeline>
            </Row>
            <Row>
                <Timeline>
                    <h2>Project</h2>
                    <Timeline.Item>
                        <li>2018-Present,Study of BCI Device and Brain Sensing Technology</li>
                    </Timeline.Item>
                </Timeline>

            </Row>
            <Row>
                <Timeline>

                    <h2>Teacher Assistant</h2>
                    <Timeline.Item>
                        <li>2018,Hardware lab</li>
                    </Timeline.Item>
                </Timeline>
            </Row>
            <Divider>

            </Divider>
        </div>

        </>
    )

}

export default Experience