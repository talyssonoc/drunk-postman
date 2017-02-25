import React from 'react';
import { connect } from 'react-redux';

import Platform from './Platform';
import config from '../config';

const { tileSize } = config;

const Board = (props) => {
  const {
    line, column,
    directions, character
  } = props;

  return (
    <div style={style(props)}>
      <Platform
        character={character}
        column={column}
        directions={directions}
        line={line}
        tileSize={tileSize}
      />
    </div>
  );
};

const style = ({ height, width }) => ({
  border: '1px solid black',
  position: 'relative',
  height: `${tileSize * height}px`,
  width: `${tileSize * width}px`,
  backgroundImage: 'url(./images/asfalt.png)'
});

export default connect(
  ({ platform: { line, column, directions }, character }) => ({
    line, column, directions, character
  })
)(Board);
