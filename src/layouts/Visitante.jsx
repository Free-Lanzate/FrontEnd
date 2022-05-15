import React from 'react'
import "./usuario.scss"
import {Layout} from "antd"

function Visitante (props) {

  const {children} = props;
  const {Header, Content, Footer} = Layout;

  return (
    <div className='visitante'>

      <Layout>
        <h2>Menu side Visitante</h2>
        <Layout>
          <Header>Header...</Header>
          <Content> {children} </Content>
          <Footer>Footerccccc</Footer>
        </Layout>
      </Layout>
    </div>
  );
}

export default Visitante