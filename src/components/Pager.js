import React from 'react'
import { Pagination, Row } from 'antd'

function Pager ({ totalResults, onChangePage, current }) {

  return (
    <Row wrap={false} style={{ margin: '10px 0px 30px'}}>
      <Pagination
        total={totalResults}
        showSizeChanger={false}
        showQuickJumper
        hideOnSinglePage
        pageSize={10}
        responsive
        onChange={(selectedPage) => onChangePage(selectedPage)}
        current={current}
      />
    </Row>
  )
}

export default Pager
