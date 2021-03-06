import React from 'react'
import { Card, Col, Image, Row } from 'antd'
import { Link } from 'react-router-dom'
import { searchMovieByIdDispatcher } from '../../redux/actions/movies/movieActions'
import { connect } from 'react-redux'
import {IMovieListItem} from "../types";

const { Meta } = Card

interface IProps {
    item: IMovieListItem;
    searchById: (id: string) => void
}

function MoviesListItem ({ item, searchById }:IProps) {

  return (
    <>
      <Row justify='center'>
        <Link to={`/movies/${item.imdbID}`}>
          <Col title={item.Title} onClick={() => searchById(item.imdbID)}>
            <Card
              hoverable={true}
              style={{ width: 240, margin: 20 }}
              cover={
                <Image
                  placeholder
                  src={item.Poster === 'N/A' ? 'error' : item.Poster}
                  height={320}
                  preview={false}
                />
              }
            >
              <Meta
                title={item.Title}
                description={
                  <Row justify='space-between'>
                    <Col>{item.Type}</Col>
                    <Col>{item.Year}</Col>
                  </Row>
                }
              />
            </Card>
          </Col>
        </Link>
      </Row>
    </>
  )
}

const mapDispatchToProps = (dispatch:any) => ({
  searchById: (id: string) => dispatch(searchMovieByIdDispatcher(id))
})

export default connect(null, mapDispatchToProps)(MoviesListItem)
