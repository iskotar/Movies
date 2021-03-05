import React, {useEffect, useRef} from 'react'
import {Row} from 'antd'
import {connect} from 'react-redux'
import ShowsListItem from "./ShowsListItem";
import {IShowsItem} from "../types";
import {clearShowsSearchResultDispatcher} from "../../redux/actions/shows/showsActions";
import {get} from "lodash";

interface IProps {
  list: IShowsItem[];
  clearShowsSearchResult: () => void;
}

function ShowsList(props: IProps) {
  const listRef: any = useRef(null)
  const {clearShowsSearchResult} = props;
  const list = get(props, 'list', []);

  useEffect(() => {
    listRef.current.scrollIntoView({behavior: 'smooth'})
  }, [list])

  useEffect(() => {
    return () => clearShowsSearchResult()
  }, [])

  return (
    <Row ref={listRef} justify={'center'} style={{marginTop: 30}}>
      {
        list.map((item: IShowsItem, idx: number) => <ShowsListItem key={idx} item={item}/>)
      }
    </Row>
  );
}

const mapStateToProps = (state: any) => ({
  list: state.showsSearchResult.list,
})

const mapDispatchToProps = (dispatch: any) => ({
  clearShowsSearchResult: () => dispatch(clearShowsSearchResultDispatcher())
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowsList);
