import React from 'react';

import PlatformTile from './PlatformTile';

const Platform = (props) => {
  const { directions, character } = props;

  return (
    <div style={style(props)}>
      {
        directions.map((line, i) =>
          <div style={lineStyle} key={`line-${i}`}>
            {
              line.map((direction, j) =>
                <PlatformTile
                  key={`tile-${i}-${j}`}
                  hasCharacter={
                    i === character.line
                    &&
                    j === character.column
                  }
                  character={character}
                  direction={direction}
                />
              )
            }
          </div>
        )
      }
    </div>
  );
};

const style = ({ tileSize, line, column }) => ({
  position: 'absolute',
  top: `${tileSize * (line - 1)}px`,
  left: `${tileSize * (column - 1)}px`,
  height: `${tileSize * 3}px`,
  width: `${tileSize * 3}px`,
  display: 'flex',
  flexDirection: 'column',
  transition: 'top 200ms, left 200ms',
  border: '2px solid white',
  borderRadius: '5px',
  padding: '1px'
});

const lineStyle = {
  display: 'flex',
  flexDirection: 'row',
  flex: '1'
};

export default Platform;
