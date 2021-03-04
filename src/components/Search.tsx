import React, {useState} from 'react'
import {connect} from 'react-redux'
import {Col, Row} from 'antd'
import {IconButton, TextField} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
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
    value: {
      trim: () => string;
    }
  }
}

function Search(props: IProps) {
  const {searchMoviesByQuery, searchShowsByQuery, Error, clearError, history} = props
  const [inputValue, setInputValue] = useState('')
  const isPathShows = history.location.pathname.includes('/shows');

  const onChangeInput = (e: IEvent) => {
    clearError()
    setInputValue(e.target.value.trim())
  }

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (isPathShows) {
      history.push('/shows')
      searchShowsByQuery({title: inputValue})
    } else {
      history.push('/movies')
      searchMoviesByQuery({title: inputValue})
    }
  }

  return (
    <Row align='bottom' justify={'center'} style={{marginTop: 30}}>
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
            style={{border: '1px solid lightgrey', marginLeft: '10px'}}
          >
            <SearchIcon/>
          </IconButton>
        </form>
      </Col>
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
