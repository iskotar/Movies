import React from 'react'
import {Pagination, Row} from 'antd'
import {connect} from 'react-redux'
import {get} from 'lodash'
import {searchMoviesByQueryDispatcher} from '../redux/actions/movies/movieActions'
import {IMovieListItem, IShowsItem} from "./types";
import {withRouter} from "react-router";

interface IProps {
  movieSearchResult: IMovieListItem[];
  showsSearchResult: IShowsItem[];
  searchMoviesByQuery: (payload: IQuery) => void;
  history: {
    location: {
      pathname: string;
    }
  };
}

interface IQuery {
  title: string;
  page: number;
}

function Pager(props: IProps) {
  const {movieSearchResult, showsSearchResult, searchMoviesByQuery, history} = props;
  const currentMoviesPage = get(props, 'movieSearchResult.page', 1);
  const currentShowsPage = get(props, 'currentShowsPage.page', 1);
  const totalMoviesResults = get(props, 'movieSearchResult.totalResults', 0);
  const totalShowsResults = get(props, 'movieSearchResult.totalResults', 0);
  const title = get(movieSearchResult, 'title', '');
  const isPathShows = history.location.pathname.includes('/shows');

  const onChangePage = (selectedPage: number) => {
    searchMoviesByQuery({title, page: selectedPage})
  }

  return (
    <Row wrap={false} style={{margin: '10px 0px 30px'}}>
      <Pagination
        total={isPathShows ? totalShowsResults : totalMoviesResults}
        showSizeChanger={false}
        showQuickJumper
        hideOnSinglePage
        pageSize={10}
        responsive
        onChange={(selectedPage) => onChangePage(selectedPage)}
        current={isPathShows ? currentShowsPage : currentMoviesPage}
      />
    </Row>
  )
}

const mapStateToProps = (state: any) => ({
  movieSearchResult: state.movieSearchResult,
  showsSearchResult: state.showsSearchResult
})

const mapDispatchToProps = (dispatch: any) => ({
  searchMoviesByQuery: (payload: IQuery) => dispatch(searchMoviesByQueryDispatcher(payload))
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Pager))
