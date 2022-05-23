import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"

function Visitante (props) {

  const {children} = props;
  const {Content, Sider} = Layout;
  const side = props.side;
  const rol = "/";

    if (side){
      return (
        <div className='usuario'>
          <Layout>
            <Sider>
              <Sidebar rol={rol}/>
            </Sider>
            <Content> {children} </Content>
          </Layout>
        </div>
      )
    }else{
      return (
        <div className='visitante'>
          <Layout>
            <Content> {children} </Content>
          </Layout>
        </div>
      )
    }
}

export default Visitante