import * as React from 'react'
import { Row, Layout } from 'antd'
import { Link } from 'react-router-dom'
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
        <Link to="/movies">
          <img src={logo} alt="" height={'73vw'}/>
        </Link>
        <Link to="/shows">
          <img src={logo3} alt="" height={'73vw'}/>
        </Link>
      </Row>
    </Header>
  )
}

export default HeaderPanel
