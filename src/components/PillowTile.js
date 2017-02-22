import React from 'react';

const directions = {
  up: '^',
  down: 'v',
  right: '>',
  left: '<'
};

const style = ({ tileSize, hasCharacter }) => ({
  color: hasCharacter ? 'red' : 'black',
  border: '1px solid black',
  height: `${tileSize}px`,
  width: `${tileSize}px`,
  float: 'left'
});

const PillowTile = (props) => {
  const { direction, hasCharacter } = props;

  return (
    <div style={style(props)}>
      {
        hasCharacter
          ? 'x'
          : directions[direction]
      }
    </div>
  );
};

export default PillowTile;
