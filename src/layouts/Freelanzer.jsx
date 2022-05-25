import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"
import useAuth from '../hooks/useAuth'
import { Navigate } from "react-router-dom";


function Freelanzer(props) {

  const {children} = props;
  const {Header, Content, Footer, Sider} = Layout;
  const rol = props.rol;
  const{user, isLoading, isFreelancer} = useAuth();
  console.log("usuario: "+ user)

  if(!user && !isLoading){
    return(
      <>
      <Navigate to = "/login" />
      </>
    )

  }
  if(user && !isLoading && !isFreelancer){
    return(
      <>
      <Navigate to = "/usuario" />
      </>
    )
    }
    if(user && !isLoading && isFreelancer){
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
    }

  return null;
}

export default Freelanzer