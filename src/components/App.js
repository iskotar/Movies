import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import 'antd/dist/antd.css'
import Pager from './Pager'
import { Container } from '@material-ui/core'
import { Row } from 'antd'
import Search from './Search'
import List from './List'
import Header from './Header'
import ItemPage from './ItemPage'

function App () {

  return (
    <Router>
      <div className="App">
        <Container>
          <Header/>
          <Row justify={'center'}>
            <Search/>
            <Switch>
              <Route exact path="/">
                <List/>
                <Pager/>
              </Route>
              <Route path="/:id">
                <ItemPage/>
              </Route>
            </Switch>
          </Row>
        </Container>
      </div>
    </Router>
  )
}

export default App
