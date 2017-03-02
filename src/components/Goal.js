import React from 'react';

const Goal = (props) => {
  return (
    <div style={style(props)}>
      x
    </div>
  );
};

const style = ({ goal: { line, column }, tileSize }) => ({
  position: 'absolute',
  top: `${tileSize * (line - 1)}px`,
  left: `${tileSize * (column - 1)}px`,
  height: `${tileSize}px`,
  width: `${tileSize}px`,
  border: '2px solid white',
  borderRadius: '5px',
  color: 'white'
});

export default Goal;
