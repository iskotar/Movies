import React, { useEffect, useRef } from 'react'
import { Row } from 'antd'
import MoviesListItem from './MoviesListItem'
import { connect } from 'react-redux'
import {IMovieListItem} from "../types";
import Pager from "../Pager";
import {clearMoviesSearchResultDispatcher} from "../../redux/actions/movies/movieActions";
import {get} from "lodash";

interface IProps {
  list: IMovieListItem[];
  clearMoviesSearchResult: () => void;
}

function MoviesList(props:IProps) {
  const listRef:any = useRef(null)
  const {clearMoviesSearchResult} = props;
  const list = get(props, 'list', []);

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: 'smooth'})
  },[list])

  useEffect(() => {
    return () => clearMoviesSearchResult()
  }, [])

  return (
    <>
      <Row ref={listRef} justify={'center'} style={{marginTop: 30}}>
        {
          list.map((item: IMovieListItem, idx: number) => <MoviesListItem key={idx} item={item}/>)
        }
      </Row>
      <Row justify={'center'}>
        <Pager/>
      </Row>
    </>

  );
}

const mapStateToProps = (state:any) => ({
  list: state.movieSearchResult.list,
})

const mapDispatchToProps = (dispatch: any) => ({
  clearMoviesSearchResult: () => dispatch(clearMoviesSearchResultDispatcher())
})

export default connect(mapStateToProps, mapDispatchToProps)(MoviesList);
