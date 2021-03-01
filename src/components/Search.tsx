import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Col, Row } from 'antd'
import { IconButton, TextField } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import { clearErrorDispatcher, searchByQueryDispatcher } from '../redux/actions/actions'
import { withRouter } from "react-router";

interface IProps {
  history: {
    push: (val: string) => void
  };
  searchByQuery: (p: {title: string; page?: number}) => void;
  Error: string;
  clearError: () => void;
}

interface IEvent {
  target: {
    value: {
      trim: () => string;
    }
  }
}

function Search (props: IProps) {
  const { searchByQuery, Error, clearError } = props
  const [inputValue, setInputValue] = useState('')

  const onChangeInput = (e: IEvent) => {
    clearError()
    setInputValue(e.target.value.trim())
  }

  const onSubmit = (e:React.FormEvent) => {
    e.preventDefault()
    props.history.push('/movies')
    searchByQuery({ title: inputValue })
  }

  return (
    <Row align='bottom' style={{marginTop: 30}}>
      <Col>
        <form autoComplete="off" onSubmit={onSubmit}>
          <TextField
            id="search-field"
            label="Search"
            placeholder="Enter movie title"
            onChange={onChangeInput}
            margin="dense"
            error={!!Error}
            helperText={Error}
          />
          <IconButton
            color="inherit"
            onClick={onSubmit}
            style={{ border: '1px solid lightgrey', marginLeft: '10px' }}
          >
            <SearchIcon/>
          </IconButton>
        </form>
      </Col>
    </Row>
  )
}

const mapStateToProps = (state:any) => ({
  Error: state.searchResult.error
})

const mapDispatchToProps = (dispatch:any) => ({
  searchByQuery: (payload:any) => dispatch(searchByQueryDispatcher(payload)),
  clearError: () => dispatch(clearErrorDispatcher())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
