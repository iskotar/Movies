import React from 'react'
import { Row, Layout } from 'antd'
import logo from '../assets/logo.svg'
const { Header } = Layout;

function HeaderPanel () {

  return (

    <Header>
      <Row
        justify={'center'}
        style={{
          zIndex: 1,
          width: '100%',
          backgroundColor: 'rgb(22 18 39)',
          color: 'white'
        }}>
        <div>
          <img src={logo} alt="" height={90}/>
        </div>
      </Row>
    </Header>
  )
}

export default HeaderPanel
