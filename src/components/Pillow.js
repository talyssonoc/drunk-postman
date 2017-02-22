import React from 'react';
import { connect } from 'react-redux';

import PillowTile from './PillowTile';

const style = ({ tileSize, line, column }) => ({
  position: 'absolute',
  top: `${tileSize * (line - 1)}px`,
  left: `${tileSize * (column - 1)}px`,
  height: `${tileSize * 3}px`,
  width: `${tileSize * 3}px`
});

const Pillow = (props) => {
  const { directions, tileSize, character } = props;

  return (
    <div style={style(props)}>
      {
        directions.map((line, i) =>
          line.map((direction, j) =>
            <PillowTile
              hasCharacter={
                i === character.line
                &&
                j === character.column
              }
              direction={direction}
              tileSize={tileSize}
            />
          )
        )
      }
    </div>
  );
};

export default connect(
  ({ pillow: { line, column, directions }, character }) => ({
    line, column, directions, character
  })
)(Pillow);
