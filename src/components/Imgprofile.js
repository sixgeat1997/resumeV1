import React from 'react'
import '../App.css'
import { Row, Avatar, Col, Divider } from 'antd'
import Typical from 'react-typical'


function Imgprofile() {

    const steps = [
        'Hello 👋', 1000,
        
        'Chayanon Phonphet',4000
    ];

    return (
        <div className="round imgPad bgcolor ">
            {/* <Typical wrapper="span" steps={steps} loop={Infinity} className={'caca fontPage'} /> */}
            <div className="card">



                <Row>

                    <Avatar
                        size={400}
                        id="img"
                        src="https://scontent.fbkk10-1.fna.fbcdn.net/v/t31.0-8/s960x960/16299716_281946432220607_274103221620908458_o.jpg?_nc_cat=109&_nc_eui2=AeG4vKBDK54YcEbjikSyagGJ1IXtyaTCUcJK1qVgKOmT1KKbjY0TpZJclOdo1YDA3QUgfrzoCnsAKNur2e6ANgzJ4inj-cuitIdBNjOOisYmiQ&_nc_oc=AQnxg2D4WO09O628oi6uWJwLn5lhn9wQPwXcsWeysEqV_EU11LzeKE_WTDv1Cepw4G8&_nc_ht=scontent.fbkk10-1.fna&_nc_tp=7&oh=59407f777fcd957466eb14595a5472f2&oe=5EBD26A5"
                    >
                        
                    </Avatar>

                </Row>

                <Row>
                </Row>
            </div>
        </div>
    )
}

export default Imgprofile