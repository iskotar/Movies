import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import Pager from './Pager'
import { Container } from '@material-ui/core'
import { Layout, Row } from 'antd'
import Search from './Search'
import List from './List'
import HeaderPanel from './HeaderPanel'
import ItemPage from './ItemPage'
import { Slider } from './Slider'

const { Content, Footer } = Layout

function App () {

  return (
    <Router>
      <div className="App">
        <Layout>
          <HeaderPanel/>
          <Content style={{ background: 'white', minHeight: 'calc(100vh - 55px)' }}>
            <Slider/>
            <Container>
              <Row justify={'center'}>
                <Search/>
                <Route exact path="/">
                  <List/>
                  <Pager/>
                </Route>
              </Row>
              <Route path="/:id">
                <ItemPage/>
              </Route>
            </Container>
          </Content>
          <Footer>Movie ©2021 Created by Ivan Skotar</Footer>
        </Layout>
      </div>
    </Router>
  )
}

export default App
