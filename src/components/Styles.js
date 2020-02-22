import styled from "styled-components"
import { Avatar, Row } from "antd"

const SocialContainer = styled.span`
  margin: 10px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  a {
    color: inherit;
  }
  i {
    display: flex;
    align-items: center;
    justify-content: center;
      padding-top : 50px;
    font-size: 80px;
    margin: 0 24px;
    :hover {
      color: #40a9ff;
      transition: color 0.3s;
    }
  }
`

export{
    SocialContainer
}