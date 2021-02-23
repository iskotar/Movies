import React from 'react';
import { Row } from 'antd'
import ListItem from './ListItem'

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

export default List;
