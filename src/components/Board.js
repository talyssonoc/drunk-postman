import React from 'react';
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
  return (
    <div style={style(props)}>
      <Pillow tileSize={tileSize}/>
    </div>
  );
};

export default Board;
