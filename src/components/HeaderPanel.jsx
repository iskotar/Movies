import * as React from 'react'
import { Row, Layout } from 'antd'
import logo from '../assets/logo.svg'
import logo3 from '../assets/shows-logo.svg'

const { Header } = Layout

function HeaderPanel () {

  return (

    <Header style={{padding: 0}}>
      <Row
        justify={'space-around'}
        style={{
          zIndex: 1,
          width: '100%',
          backgroundColor: 'rgb(22 18 39)',
          color: 'white'
        }}>
        <a href="/movies">
          <img src={logo} alt="" height={'73vw'}/>
        </a>
        <a href="/shows">
          <img src={logo3} alt="" height={'73vw'}/>
        </a>
      </Row>
    </Header>
  )
}

export default HeaderPanel
