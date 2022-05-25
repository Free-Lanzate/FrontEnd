import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"
import {getAccessToken} from "../api/auth";
import {Navigate} from "react-router-dom";

function Visitante (props) {

  const {children} = props;
  const {Content, Sider} = Layout;
  const side = props.side;
  const rol = "/";


  if(getAccessToken()){
    return <Navigate to = '/usuario'/>
  }

  else if (side){
      return (
        <div>
          <Layout className='d-flex flex-row'>
            <Sider>
              <Sidebar rol={rol}/>
            </Sider>
            <Content> {children} </Content>
          </Layout>
        </div>
      )
    }else{
      return (
        <div>
          <Layout>
            <Content> {children} </Content>
          </Layout>
        </div>
      )
    }
}

export default Visitante