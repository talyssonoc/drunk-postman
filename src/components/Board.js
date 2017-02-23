import React from 'react';
import { connect } from 'react-redux';

import Pillow from './Pillow';
import config from '../config';

const { tileSize } = config;

const style = ({ height, width }) => ({
  border: '1px solid black',
  position: 'relative',
  height: `${tileSize * height}px`,
  width: `${tileSize * width}px`
});

const Board = (props) => {
  const {
    line, column,
    directions, character
  } = props;

  return (
    <div style={style(props)}>
      <Pillow
        line={line}
        column={column}
        directions={directions}
        character={character}
        tileSize={tileSize}/>
    </div>
  );
};

export default connect(
  ({ pillow: { line, column, directions }, character }) => ({
    line, column, directions, character
  })
)(Board);
