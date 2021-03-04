import React, { useEffect, useRef } from 'react'
import { Row } from 'antd'
import MoviesListItem from './MoviesListItem'
import { connect } from 'react-redux'
import {IMovieListItem} from "../types";
import Pager from "../Pager";

interface IProps {
  list: IMovieListItem[];
}

function MoviesList({list}:IProps) {
  const listRef:any = useRef(null)

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: 'smooth'})
  },[list])

  return (
    <>
      <Row ref={listRef} justify={'center'} style={{marginTop: 30}}>
        {
          list.map((item, idx) => <MoviesListItem key={idx} item={item}/>)
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

export default connect(mapStateToProps)(MoviesList);
