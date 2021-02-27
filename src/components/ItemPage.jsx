import React from 'react'
import { connect } from 'react-redux'
import { Row, Image, Descriptions, Rate, Empty } from 'antd'

function ItemPage ({ item }) {
  if (!Object.keys(item).length) return <Empty/>

  return (
    <>
      <Row justify='center' style={{ marginTop: 130, marginBottom: 30 }}>
        <h1>{item.Title}</h1>
      </Row>
      <Row justify='space-around'>
        <div>
          <Image
            src={item.Poster}
            preview={false}
            width={350}
            placeholder
          />
          <div>IMDb Rating </div>
          <Rate
            style={{ display: 'block' }}
            disabled
            allowHalf
            defaultValue={Math.round(item.imdbRating * 2) / 2}
            count={10}
          />
        </div>
        <Descriptions size='default' column={1} style={{ maxWidth: '600px' }}>
          <Descriptions.Item label={<b>Released</b>}>{item.Released}</Descriptions.Item>
          <Descriptions.Item label={<b>Country</b>}>{item.Country}</Descriptions.Item>
          <Descriptions.Item label={<b>Actors</b>}>{item.Actors}</Descriptions.Item>
          <Descriptions.Item label={<b>Director</b>}>{item.Director}</Descriptions.Item>
          <Descriptions.Item label={<b>Genre</b>}>{item.Genre}</Descriptions.Item>
          <Descriptions.Item label={<b>Awards</b>}>{item.Awards}</Descriptions.Item>
          <Descriptions.Item label={<b>Budget</b>}>{item.BoxOffice}</Descriptions.Item>
          <Descriptions.Item label={<b>Language</b>}>{item.Language}</Descriptions.Item>
          <Descriptions.Item label={<b>Production</b>}>{item.Production}</Descriptions.Item>
          <Descriptions.Item label={<b>Duration</b>}>{item.Runtime}</Descriptions.Item>
          <Descriptions.Item label={<b>Writer</b>}>{item.Writer}</Descriptions.Item>
        </Descriptions>
        <div style={{ margin: 30 }}>{item.Plot}</div>
      </Row>
    </>
  )
}

const mapStateToProps = (state) => ({
  item: state.currentItem
})

export default connect(mapStateToProps)(ItemPage)
