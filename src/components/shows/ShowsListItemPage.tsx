import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import {Row, Image, Descriptions, Rate, Empty} from 'antd'
import {ICastItem, IShowsItem} from "../types";
import {get} from "lodash";
import {getCastByShowIdDispatcher} from "../../redux/actions/shows/showsActions";
import CastList from './CastList';

interface IProps {
  item: {
    info: IShowsItem;
    cast: ICastItem[];
  };
  getCastByShowId: (id: number) => void;
}

function ShowsListItemPage(props: IProps) {
  const {getCastByShowId} = props;
  const cast = get(props, 'item.cast', []);
  const id = get(props, 'item.info.id', '');
  const name = get(props, 'item.info.name', '');
  const imageOriginal = get(props, 'item.info.image.original', '');
  const imageMedium = get(props, 'item.info.image.medium', '');
  const release = get(props, 'item.info.premiered', '');
  const language = get(props, 'item.info.language', '');
  const runtime = get(props, 'item.info.runtime', null);
  const status = get(props, 'item.info.status', '');
  const summary = get(props, 'item.info.summary', '');
  const rating = get(props, 'item.info.rating.average', null);
  const type = get(props, 'item.info.type', '');
  const officialSite = get(props, 'item.info.officialSite', '');
  const genres = get(props, 'item.info.genres', []).join(', ');
  const production = get(props, 'item.info.network.name', '');
  const country = get(props, 'item.info.network.country.name', '');
  const scheduleTime = get(props, 'item.info.schedule.time', '');
  const scheduleDays = get(props, 'item.info.schedule.days', []).join(', ');
  const timezone = get(props, 'item.info.network.country.timezone', '');

  useEffect(() => {
    id && getCastByShowId(id)
  }, [id])

  if (!Object.keys(props.item).length) return <Empty/>

  return (
    <>
      <Row justify='center' style={{marginTop: 130, marginBottom: 30}}>
        <h1>{name}</h1>
      </Row>
      <Row justify='space-around'>
        <div>
          <Image
            src={imageOriginal || imageMedium}
            preview={false}
            width={350}
            placeholder
          />
          <div>IMDb Rating</div>
          <Rate
            style={{display: 'block'}}
            disabled
            allowHalf
            value={Math.round(rating * 2) / 2}
            count={10}
          />
        </div>
        <Descriptions size='default' column={1} style={{maxWidth: '600px'}}>
          <Descriptions.Item label={<b>Released</b>}>{release}</Descriptions.Item>
          <Descriptions.Item label={<b>Show Type</b>}>{type}</Descriptions.Item>
          <Descriptions.Item label={<b>Genre</b>}>{genres || 'N/A'}</Descriptions.Item>
          <Descriptions.Item label={<b>Language</b>}>{language}</Descriptions.Item>
          <Descriptions.Item label={<b>Country</b>}>{country}</Descriptions.Item>
          <Descriptions.Item label={<b>Network</b>}>
            <a target="_blank" href={officialSite}>{production}</a>
          </Descriptions.Item>
          <Descriptions.Item label={<b>Status</b>}>{status}</Descriptions.Item>
          <Descriptions.Item label={<b>Duration</b>}>{runtime} min</Descriptions.Item>
          <Descriptions.Item label={<b>Schedule</b>}>
            Every {scheduleDays} at {scheduleTime} ({timezone})
          </Descriptions.Item>
        </Descriptions>
        <div style={{margin: 30}} dangerouslySetInnerHTML={{__html: summary}}/>
      </Row>
      <CastList cast={cast}/>
    </>
  )
}

const mapStateToProps = (state: any) => ({
  item: state.currentItem
})

const mapDispatchToProps = (dispatch: any) => ({
  getCastByShowId: (payload: number) => dispatch(getCastByShowIdDispatcher(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(ShowsListItemPage)
