import React from 'react';

import PillowTile from './PillowTile';

const style = ({ tileSize, line, column }) => ({
  position: 'absolute',
  top: `${tileSize * (line - 1)}px`,
  left: `${tileSize * (column - 1)}px`,
  height: `${tileSize * 3}px`,
  width: `${tileSize * 3}px`,
  display: 'flex',
  flexDirection: 'column',
  transition: 'top 200ms, left 200ms',
  borderStyle: 'solid',
  borderWidth: '8px',
  borderImage: 'url(./images/border.png) 10 fill repeat',
  borderRadius: '4px',
  backgroundImage: 'url(./images/asfalt.png)'
});

const lineStyle = ({ tileSize}) => ({
  display: 'flex',
  flexDirection: 'row',
  flex: '1'
});

const Pillow = (props) => {
  const { directions, tileSize, character } = props;

  return (
    <div style={style(props)}>
      {
        directions.map((line, i) =>
          <div style={lineStyle(props)} key={`line-${i}`}>
            {
              line.map((direction, j) =>
                <PillowTile
                  hasCharacter={
                    i === character.line
                    &&
                    j === character.column
                  }
                  direction={direction}
                  tileSize={tileSize}
                  key={`tile-${i}-${j}`}
                />
              )
            }
          </div>
        )
      }
    </div>
  );
};

export default Pillow;
