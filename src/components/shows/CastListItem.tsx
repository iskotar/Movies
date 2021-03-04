import React from 'react'
import {get} from "lodash";
import {ICastItem} from "../types";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

interface IProps {
  actor: ICastItem;
}

function CastListItem(props: IProps) {
  const image = get(props, 'actor.person.image.medium', '');
  const actorName = get(props, 'actor.person.name', '');
  const actorBirthday = get(props, 'actor.person.birthday', '');
  const charName = get(props, 'actor.character.name', '');

  return (
    <Card style={{display: 'flex', margin: 15, width: 300, height: 180}}>
      {
        image &&
        <img
          style={{maxWidth: '100%', maxHeight: '100%'}}
          src={image || 'error'}
          title="Live from space album cover"
        />
      }
      <CardContent style={{flex: '1 0 auto', maxWidth: 180}}>
        <h3>{actorName}</h3>
        <Typography variant="subtitle1" color="textSecondary">
          <b>as:</b> {charName}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          <b>BD:</b> {actorBirthday || 'N/A'}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CastListItem;
