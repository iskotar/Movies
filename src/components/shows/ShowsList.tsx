import React, {useEffect, useRef} from 'react'
import {Row} from 'antd'
import {connect} from 'react-redux'
import ShowsListItem from "./ShowsListItem";
import {IShowsItem} from "../types";
import Pager from "../Pager";

interface IProps {
  list: IShowsItem[];
}

function ShowsList({list}: IProps) {
  const listRef: any = useRef(null)

  useEffect(() => {
    listRef.current.scrollIntoView({behavior: 'smooth'})
  }, [list])

  return (
    <>
      <Row ref={listRef} justify={'center'} style={{marginTop: 30}}>
        {
          list.map((item, idx) => <ShowsListItem key={idx} item={item}/>)
        }
      </Row>
      <Row justify={'center'}>
        <Pager/>
      </Row>
    </>
  );
}

const mapStateToProps = (state: any) => ({
  list: state.showsSearchResult.list,
})

export default connect(mapStateToProps)(ShowsList);
