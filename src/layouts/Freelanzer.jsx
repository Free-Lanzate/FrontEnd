import React from 'react'
import "./usuario.scss"
import {Layout} from "antd"
import SidebarAdmin from "../components/SidebarAdmin"


function freelanzer(props) {

  const {children} = props;
  const {Header, Content, Footer, Sider} = Layout;

  return (
    <div className='freelanzer'>

      <Layout>
      <Sider>
      <SidebarAdmin/>
      </Sider>
        <Layout>
          <Header>Header...</Header>
          <Content> {children} </Content>
          <Footer>Footerccccc</Footer>
        </Layout>
      </Layout> 
        
    </div>
  )
}

export default freelanzer