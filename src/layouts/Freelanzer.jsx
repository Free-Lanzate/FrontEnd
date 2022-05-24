import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"


function freelanzer(props) {

  const {items} = props;
  const {Header, Content, Footer, Sider} = Layout;
  const rol = props.rol;

  return (
    <div>

      <Layout className='d-flex flex-row'>
      <Sider>
        <Sidebar rol={rol}/>
      </Sider>
          <Content> {items} </Content>
      </Layout> 
        
    </div>
  )
}

export default freelanzer