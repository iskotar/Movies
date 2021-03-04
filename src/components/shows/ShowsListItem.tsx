import React from 'react'
import {Card, Col, Image, Row} from 'antd'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {IShowsItem} from "../types";
import {get} from 'lodash'
import {searchShowsByIdDispatcher} from "../../redux/actions/shows/showsActions";

const {Meta} = Card

interface IProps {
  item: IShowsItem;
  searchById: (id: number) => void
}

function ShowsListItem(props: IProps) {
  const {searchById} = props;
  const id = get(props, 'item.id', null);
  const name = get(props, 'item.name', '');
  const imageOriginal = get(props, 'item.image.original', '');
  const imageMedium = get(props, 'item.image.medium', '');
  const type = get(props, 'item.type', '');
  const release = get(props, 'item.premiered', '');

  return (
    <>
      <Row justify='center'>
        <Link to={`/shows/${id}`}>
          <Col
            title={name}
            onClick={() => searchById(id)}
          >
            <Card
              hoverable={true}
              style={{width: 240, margin: 20}}
              cover={
                <Image
                  placeholder
                  src={imageMedium || imageOriginal}
                  height={320}
                  preview={false}
                />
              }
            >
              <Meta
                title={name}
                description={
                  <Row justify='space-between'>
                    <Col>{type}</Col>
                    <Col>{release && release.slice(0, 4)}</Col>
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

const mapDispatchToProps = (dispatch: any) => ({
  searchById: (id: number) => dispatch(searchShowsByIdDispatcher(id))
})

export default connect(null, mapDispatchToProps)(ShowsListItem)
