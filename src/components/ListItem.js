import React from 'react'
import { Card, Col, Row } from 'antd'

const { Meta } = Card

function ListItem ({ item }) {

  return (
    <>
      <Row justify='center'>
        <Col title={item.Title}>
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
      </Row>
    </>
  )
}

export default ListItem
