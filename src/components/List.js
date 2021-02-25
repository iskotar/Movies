import React, { useEffect, useRef } from 'react'
import { Row } from 'antd'
import ListItem from './ListItem'
import { connect } from 'react-redux'

function List({list}) {
  const listRef = useRef()

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

const mapStateToProps = (state) => ({
  list: state.searchResult.list
})

export default connect(mapStateToProps)(List);
