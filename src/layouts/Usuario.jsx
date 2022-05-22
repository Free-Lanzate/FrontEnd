import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"

function Usuario (props) {

  const {children} = props;
  const {Header, Content, Footer, Sider} = Layout;

  return (
    <div className='usuario'>

    <Layout>
      <Sider>
      <Sidebar/>
      </Sider>
        <Header>Header</Header>
        <Content>{children}</Content>
        <Footer>Footer</Footer>
    </Layout>
    </div>
  );
}

export default Usuario