import React from 'react'
import { Icon, Divider } from 'antd'
import Social from "./Social";

const Contact = () => {

    return (
        <div  className="innerLine">
            <Divider>
                <h1>Contact</h1>
            </Divider>
            <Social>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://www.facebook.com/Chayanon.Por"
                >
                    <Icon type="facebook" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://medium.com/@sixgeat1997"
                >
                    <Icon type="medium" />
                </a>
                <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/sixgeat1997"
                >
                    <Icon type="github" />
                </a>

            </Social>
        </div>
    )


}

export default Contact