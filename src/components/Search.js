import React from 'react'
import { Col, Row } from 'antd'
import { IconButton, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'

function Search ({ search, query, error }) {

  const onSubmit = (e) => {
    search()
    e.preventDefault();
  }

  return (
    <Row align='bottom'>
      <Col>
        <form autoComplete="off" onSubmit={onSubmit}>
          <TextField
            id="search-field"
            label="Search"
            placeholder="Enter movie title"
            onChange={query}
            margin="dense"
            error={!!error}
            helperText={error}
          />
          <IconButton
            color="inherit"
            onClick={onSubmit}
            style={{ border: '1px solid lightgrey', marginLeft: '10px'}}
          >
            <SearchIcon/>
          </IconButton>
        </form>
      </Col>
    </Row>
  )
}

export default Search
