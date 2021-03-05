import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import {Row} from 'antd'
import {FormControl, IconButton, InputLabel, Select, TextField} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
import MenuItem from '@material-ui/core/MenuItem';
import {searchShowsByQueryDispatcher} from "../redux/actions/shows/showsActions";
import {withRouter} from "react-router";
import {clearErrorDispatcher, searchMoviesByQueryDispatcher} from "../redux/actions/movies/movieActions";

interface IProps {
  history: {
    push: (val: string) => void;
    location: {
      pathname: string;
    }
  };
  searchMoviesByQuery: (p: { title: string; page?: number }) => void;
  searchShowsByQuery: (p: { title: string; page?: number }) => void;
  Error: string;
  clearError: () => void;
}

interface IEvent {
  target: {
    value: string
  }
}

function Search(props: IProps) {
  const {searchMoviesByQuery, searchShowsByQuery, Error, clearError, history} = props
  const [inputValue, setInputValue] = useState('')
  const [category, setCategory] = useState(0)

  useEffect(() => {
    setInputValue('')
  }, [history.location.pathname])

  const onChangeInput = (e: IEvent) => {
    clearError()
    setInputValue(e.target.value.trim())
  }

  const onChangeCategory = (event: any) => setCategory(event.target.value)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (category) {
      history.push('/shows')
      searchShowsByQuery({title: inputValue})
    } else {
      history.push('/movies')
      searchMoviesByQuery({title: inputValue})
    }
  }

  return (
    <Row align='bottom' justify={'center'} style={{marginTop: 30}}>
      <FormControl>
        <InputLabel id="select-label">Category</InputLabel>
        <Select
          labelId="select-label"
          id="select"
          value={category}
          onChange={onChangeCategory}
        >
          <MenuItem value={0}>Movies</MenuItem>
          <MenuItem value={1}>Shows</MenuItem>
        </Select>
      </FormControl>
      <form onSubmit={onSubmit} autoComplete="off" style={{marginLeft: '10px'}}>
        <FormControl>
          <TextField
            id="search-field"
            label="Search"
            placeholder="Enter movie title"
            onChange={onChangeInput}
            error={!!Error}
            helperText={Error}
            onSubmit={onSubmit}
            value={inputValue}
          />
        </FormControl>
      </form>
      <IconButton
        color="inherit"
        onClick={onSubmit}
        style={{border: '1px solid lightgrey'}}
      >
        <SearchIcon/>
      </IconButton>
    </Row>
  )
}

const mapStateToProps = (state: any) => ({
  Error: state.movieSearchResult.error
})

const mapDispatchToProps = (dispatch: any) => ({
  searchMoviesByQuery: (payload: any) => dispatch(searchMoviesByQueryDispatcher(payload)),
  searchShowsByQuery: (payload: any) => dispatch(searchShowsByQueryDispatcher(payload)),
  clearError: () => dispatch(clearErrorDispatcher())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Search))
