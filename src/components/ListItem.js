import React from 'react'
import { Card, Col, Row } from 'antd'
import { Link } from 'react-router-dom'
import { searchByIdDispatcher } from '../redux/actions/actions'
import { connect } from 'react-redux'

const { Meta } = Card

function ListItem ({ item, searchById }) {

  return (
    <>
      <Row justify='center'>
        <Link to={`/${item.imdbID}`}>
          <Col title={item.Title} onClick={() => searchById(item.imdbID)}>
            <Card
              hoverable={true}
              style={{ width: 240, margin: 20 }}
              cover={<img alt="example" src={item.Poster} height={290}/>}
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

export default connect(null, mapDispatchToProps)(ListItem);
