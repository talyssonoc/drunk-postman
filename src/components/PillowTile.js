import React from 'react';

const directions = {
  up: '^',
  down: 'v',
  right: '>',
  left: '<'
};

const style = ({ tileSize, hasCharacter }) => ({
  color: hasCharacter ? 'red' : 'yellow',
  flex: '1 0 auto',
  float: 'left',
  textAlign: 'center'
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
