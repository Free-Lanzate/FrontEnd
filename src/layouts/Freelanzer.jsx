import React from 'react'
import "./usuario.scss"
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"


function freelanzer(props) {

  const {items} = props;
  const {Header, Content, Footer, Sider} = Layout;

  return (
    <div className='freelanzer'>

      <Layout>
      <Sider>
      <Sidebar/>
      </Sider>
        <Layout>
          <Header>Header...</Header>
          <Content> {items} </Content>
          <Footer>Footerccccc</Footer>
        </Layout>
      </Layout> 
        
    </div>
  )
}

export default freelanzer