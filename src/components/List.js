import React from 'react';
import { Row } from 'antd'
import ListItem from './ListItem'
import { connect } from 'react-redux'

function List({list}) {

  return (
    <Row justify={'center'} style={{marginTop: 30}}>
      {
        list && list.map((item, idx) =>
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
