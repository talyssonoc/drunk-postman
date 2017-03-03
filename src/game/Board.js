import React from 'react';
import { connect } from 'react-redux';

import { Pad } from '../pad';
// import Goal from './Goal';

const Board = (props) => {
  const {
    character, stage,
    pad, tileSize
  } = props;

  return (
    <div style={style(props)}>
      <Pad
        character={character}
        pad={pad}
        tileSize={tileSize}
      />

      {/*
        stage.goals.map((goal, i) =>
          <Goal
            goal={goal}
            key={`goal-${i}`}
            tileSize={tileSize}
          />
        )
      */}
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
  ({ pad, stage, character }) => ({
    pad, stage, character
  })
)(Board);
