import * as React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import 'antd/dist/antd.css'
import {Container} from '@material-ui/core'
import {Layout, Row} from 'antd'
import Search from './Search'
import MoviesList from './movies/MoviesList'
import HeaderPanel from './HeaderPanel'
import MoviesListItemPage from './movies/MoviesListItemPage'
import {Slider} from './Slider'
import ShowsList from "./shows/ShowsList";
import ShowsListItemPage from "./shows/ShowsListItemPage";

const {Content, Footer} = Layout
const BASE_URL = process.env.PUBLIC_URL;


function App() {

  return (
    <Router basename={BASE_URL}>
      <div className="App">
        <Layout>
          <HeaderPanel/>
          <Content style={{background: 'white', minHeight: 'calc(100vh - 55px)'}}>
            <Slider/>
            <Container>
              <Switch>
                <Row justify={'center'} style={{display: 'grid'}}>
                  <Search/>
                  <Route exact path="/movies">
                    <MoviesList/>
                  </Route>
                  <Route exact path="/shows">
                    <ShowsList/>
                  </Route>
                  <Route path="/movies/:id">
                    <MoviesListItemPage/>
                  </Route>
                  <Route path="/shows/:id">
                    <ShowsListItemPage/>
                  </Route>
                </Row>
              </Switch>
            </Container>
          </Content>
          <Footer>Movie ©2021 Created by Ivan Skotar</Footer>
        </Layout>
      </div>
    </Router>
  )
}

export default App
