import React from 'react';
import { connect } from 'react-redux';

import Platform from './Platform';
import Goal from './Goal';

const Board = (props) => {
  const {
    character, directions,
    stage, platform, tileSize
  } = props;

  return (
    <div style={style(props)}>
      <Platform
        character={character}
        platform={platform}
        tileSize={tileSize}
      />

      {
        stage.goals.map((goal, i) =>
          <Goal
            goal={goal}
            key={`goal-${i}`}
            tileSize={tileSize}
          />
        )
      }
    </div>
  );
};

const style = ({ height, width, tileSize }) => ({
  position: 'relative',
  height: `${tileSize * height}px`,
  width: `${tileSize * width}px`,
  border: '2px solid white',
  borderRadius: '8px',
  backgroundImage: 'url(./images/asfalt.png)'
});

export default connect(
  ({ platform, stage, character }) => ({
    platform, stage, character
  })
)(Board);
