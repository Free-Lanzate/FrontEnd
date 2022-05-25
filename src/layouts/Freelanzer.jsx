import React from 'react'
import {Layout} from "antd"
import Sidebar from "../components/Sidebar"
import useAuth from '../hooks/useAuth'
import {Navigate} from "react-router-dom";


function Freelanzer(props) {

  const {items} = props;
  const {Header, Content, Footer, Sider} = Layout;
  const rol = props.rol;
  const{user, isLoading} = useAuth();

    if(!user && !isLoading) {
        return (
            <>
                <Navigate to="/login"/>
            </>
        )
    }

    if(user && !isLoading) {
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
}

export default Freelanzer