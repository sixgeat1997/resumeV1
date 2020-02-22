import React from 'react'
import '../App.css'
import { Row, Avatar, Col } from 'antd'
import Typical from 'react-typical'


function Imgprofile() {

    const steps = [
        'Hello 👋', 1000,
        'I am react-typical', 1000,
        'I can support emoji 👌', 1000,
        'I can only delete what needs deleting', 1000,
        'I can pause', 4000,
        'I can loop', 1000,
        'I can wait', 3000,
        'I can vary typing speed', 2000,
        'Install me now', 1000,
        'npm install --save react-typical', 1000
    ];

    return (
        <div className="round imgPad ">
            <Typical wrapper="span" steps={steps} loop={1} className={'fontPage caca'} />
            <div className="card">



                <Row>

                    <Avatar
                        size={200}
                        src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/p720x720/71960663_2457448977642563_4634948364461408256_o.jpg?_nc_cat=102&_nc_oc=AQnb9fLAJrMNCQN6u7DqtJWF5J4xZ7MtqDVJ49gpEzSugyl2709K63KBCRL-qDlNrxI&_nc_ht=scontent.fbkk10-1.fna&_nc_tp=6&oh=b7cc91d323cc9e699f2d1aec52db8c06&oe=5EB65F99"
                    ></Avatar>

                </Row>

                <Row>
                </Row>
            </div>
        </div>
    )
}

export default Imgprofile