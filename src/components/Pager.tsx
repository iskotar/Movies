import React from 'react'
import { Pagination, Row } from 'antd'
import { connect } from 'react-redux'
import { get } from 'lodash'
import { searchByQueryDispatcher } from '../redux/actions/actions'

interface IProps {
    searchResult: [];
    searchByQuery: (payload: IQuery) => void;
}

interface IQuery {
    title: string;
    page: number;
}

function Pager ({ searchResult, searchByQuery }:IProps) {
  const currentPage = get(searchResult, 'page', 1);
  const totalResults = get(searchResult, 'totalResults', 0);
  const title = get(searchResult, 'title', '');

  return (
    <Row wrap={false} style={{ margin: '10px 0px 30px'}}>
      <Pagination
        total={totalResults}
        showSizeChanger={false}
        showQuickJumper
        hideOnSinglePage
        pageSize={10}
        responsive
        onChange={(selectedPage) => searchByQuery({ title, page: selectedPage })}
        current={currentPage}
      />
    </Row>
  )
}

const mapStateToProps = (state:any) => ({
  searchResult: state.searchResult
})

const mapDispatchToProps = (dispatch:any) => ({
  searchByQuery: (payload: IQuery) => dispatch(searchByQueryDispatcher(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(Pager)
