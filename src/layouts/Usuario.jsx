import React, { useState } from "react";
import "./usuario.scss"
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"
import useAuth from '../hooks/useAuth'
import { Navigate } from "react-router-dom";

function Usuario (props) {

  const {children} = props;
  const {Header, Content, Footer, Sider} = Layout;
  const{user, isLoading} = useAuth();
  console.log("usuario: "+ user)

  if(!user){

    return(
      <>
      <Navigate to = "/login" />
      </>
    )

  }else{
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
}

export default Usuario