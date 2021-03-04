import React from 'react'
import { connect } from 'react-redux'
import { Row, Image, Descriptions, Rate, Empty } from 'antd'
import {IMovieItemPage} from "../types";
import {get} from "lodash";

interface IProps {
  item: IMovieItemPage;
}

function MoviesListItemPage (props:IProps) {
  const title = get(props, 'item.info.Title', '');
  const image = get(props, 'item.info.Poster', '');
  const country = get(props, 'item.info.Country', '');
  const actors = get(props, 'item.info.Actors', '');
  const director = get(props, 'item.info.Director', '');
  const genre = get(props, 'item.info.Genre', '');
  const awards = get(props, 'item.info.Awards', '');
  const boxOffice = get(props, 'item.info.BoxOffice', '');
  const production = get(props, 'item.info.Production', '');
  const writer = get(props, 'item.info.Writer', '');
  const release = get(props, 'item.info.Released', '');
  const language = get(props, 'item.info.Language', '');
  const runtime = get(props, 'item.info.Runtime', null);
  const summary = get(props, 'item.info.Plot', '');
  const rating = get(props, 'item.info.imdbRating', null);

  if (!Object.keys(props.item).length) return <Empty/>

  return (
    <>
      <Row justify='center' style={{ marginTop: 130, marginBottom: 30 }}>
        <h1>{title}</h1>
      </Row>
      <Row justify='space-around'>
        <div>
          <Image
            src={image}
            preview={false}
            width={350}
            placeholder
          />
          <div>IMDb Rating </div>
          <Rate
            style={{ display: 'block' }}
            disabled
            allowHalf
            value={Math.round(rating * 2) / 2}
            count={10}
          />
        </div>
        <Descriptions size='default' column={1} style={{ maxWidth: '600px' }}>
          <Descriptions.Item label={<b>Released</b>}>{release}</Descriptions.Item>
          <Descriptions.Item label={<b>Country</b>}>{country}</Descriptions.Item>
          <Descriptions.Item label={<b>Actors</b>}>{actors}</Descriptions.Item>
          <Descriptions.Item label={<b>Director</b>}>{director}</Descriptions.Item>
          <Descriptions.Item label={<b>Genre</b>}>{genre}</Descriptions.Item>
          <Descriptions.Item label={<b>Awards</b>}>{awards}</Descriptions.Item>
          <Descriptions.Item label={<b>Budget</b>}>{boxOffice}</Descriptions.Item>
          <Descriptions.Item label={<b>Language</b>}>{language}</Descriptions.Item>
          <Descriptions.Item label={<b>Production</b>}>{production}</Descriptions.Item>
          <Descriptions.Item label={<b>Duration</b>}>{runtime}</Descriptions.Item>
          <Descriptions.Item label={<b>Writer</b>}>{writer}</Descriptions.Item>
        </Descriptions>
        <div style={{ margin: 30 }}>{summary}</div>
      </Row>
    </>
  )
}

const mapStateToProps = (state:any) => ({
  item: state.currentItem
})

export default connect(mapStateToProps)(MoviesListItemPage)
