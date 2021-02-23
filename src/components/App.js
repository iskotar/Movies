import React, { useEffect, useState } from 'react'
import 'antd/dist/antd.css'
import Pager from './Pager'
import { Container } from '@material-ui/core'
import { Row } from 'antd'
import Search from './Search'
import List from './List'
import Header from './Header'
import { searchByQuery } from '../services/API'

function App () {
  const [query, setQuery] = useState({
    title: '',
    type: '',
    country: '',
    genre: '',
    language: '',
    y: '',
    page: ''
  })
  const [list, setList] = useState([])
  const [totalResults, setTotalResults] = useState()
  const [error, setError] = useState('')

  useEffect(() => {
    query.page && search()
  }, [query.page])

  const search = async () => {
    const res = await searchByQuery(query)
    if (res.Error) {
      setList([])
      setTotalResults()
      return setError(query.title.length ? 'Movie not found' : 'Please, enter the movie title')
    }
    setList(res.Search)
    setTotalResults(res.totalResults)
  }

  const onChangeTitle = (e) => {
    setError(null)
    setQuery({ ...query, title: e.target.value, page: '' })
  }

  const onChangePage = (selectedPage) => {
    setQuery({ ...query, page: selectedPage })
  }

  return (
    <div className="App">
      <Container>
        <Header/>
        <Row justify={'center'}>
          <Search search={search} query={onChangeTitle} onChangePage={onChangePage} error={error}/>
          <List list={list}/>
          <Pager totalResults={totalResults} onChangePage={onChangePage} current={query.page}/>
        </Row>
      </Container>
    </div>
  )
}

export default App
