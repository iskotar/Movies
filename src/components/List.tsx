import React, { useEffect, useRef } from 'react'
import { Row } from 'antd'
import ListItem from './ListItem'
import { connect } from 'react-redux'
import {IMovieItem} from "./types";

interface IProps {
  list: IMovieItem[];
}

function List({list}:IProps) {
  const listRef:any = useRef(null)

  useEffect(() => {
    listRef.current.scrollIntoView({ behavior: 'smooth'})
  },[list])

  return (
    <Row ref={listRef} justify={'center'} style={{marginTop: 30}}>
      {
        list.map((item, idx) =>
          <ListItem key={idx} item={item}/>
        )
      }
    </Row>
  );
}

const mapStateToProps = (state:any) => ({
  list: state.searchResult.list
})

export default connect(mapStateToProps)(List);
