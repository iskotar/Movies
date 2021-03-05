import React from 'react'
import {ICastItem} from "../types";
import {Row} from "antd";
import {get} from "lodash";
import CastListItem from "./CastListItem";

interface IProps {
  cast: ICastItem[];
}

function CastList(props: IProps) {
  const cast = get(props, 'cast', []);

  return (
    <>
      <h1 style={{textAlign: 'center'}}>
        CAST
      </h1>
      <Row justify='center' style={{marginBottom: 30}}>
        {
          cast.length ?
            cast.map((actor: ICastItem, idx: number) => <CastListItem key={idx} actor={actor}/>)
            : 'N/A'
        }
      </Row>
    </>
  );
}

export default CastList;
