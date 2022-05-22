import React from 'react'
import {Layout} from "antd"

function Visitante (props) {

  const {children} = props;
  const {Header, Content, Footer} = Layout;

  return (
    <div className='visitante'>

      <Layout>
        <Layout>
          <Content> {children} </Content>
        </Layout>
      </Layout>
    </div>
  );
}

export default Visitante