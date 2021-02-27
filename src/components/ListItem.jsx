import React from 'react'
import { Card, Col, Image, Row } from 'antd'
import { Link } from 'react-router-dom'
import { searchByIdDispatcher } from '../redux/actions/actions'
import { connect } from 'react-redux'

const { Meta } = Card

function ListItem ({ item, searchById }) {

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

const mapDispatchToProps = dispatch => ({
  searchById: (payload) => dispatch(searchByIdDispatcher(payload))
})

export default connect(null, mapDispatchToProps)(ListItem)
