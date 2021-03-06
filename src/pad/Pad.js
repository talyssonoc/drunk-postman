import React from 'react';

import PadTile from './PadTile';

const Pad = (props) => {
  const {
    character,
    pad: { directions }
  } = props;

  return (
    <div style={style(props)}>
      {
        directions.map((line, i) =>
          <div
            key={`line-${i}`}
            style={lineStyle}
          >
            {
              line.map((direction, j) =>
                <PadTile
                  character={character}
                  direction={direction}
                  hasCharacter={
                    i === character.line
                    &&
                    j === character.column
                  }
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

const style = ({ tileSize, pad: { line, column }}) => ({
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

export default Pad;
