import React, { useState } from 'react'
import { Row, Col, Divider, Timeline, Button, Modal } from 'antd'
import '../App.css'
import T1 from './photo/Transcript-1.jpg'
import T2 from './photo/Transcript-2.jpg'
import T3 from './photo/Transcript-3.jpg'

function Education() {
    const edu = 'Education',
        edus = '</Education>'

    const [modal, setModal] = useState({ visible: false })

    const showModal = () => {
        setModal({
            visible: true,
        });
    };

    const handleOk = e => {
        console.log(e);
        setModal({
            visible: false,
        });
    };
    const handleCancle = e => {
        console.log(e);
        setModal({
            visible: false,
        });
    };

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
                    <div>
                        <Button type="primary" onClick={showModal}>
                            Reference
                        </Button>
                        <Modal

                            width="80%"
                            title="Basic Modal"
                            visible={modal.visible}
                            onOk={handleOk}
                            onCancel={handleCancle}
                            cancelButtonProps={{ disabled: true }}
                            okText="close"
                        >
                           <img src={T1} width="100%"/>
                           <img src={T2} width="100%"/>
                           <img src={T3} width="100%"/>
                        </Modal>
                    </div>
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