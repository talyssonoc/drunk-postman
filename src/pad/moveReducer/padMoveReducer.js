import config from '../../config';
import getRandomTileDirections from '../getRandomTileDirections';

const padMoveReducer = (state) => {
  const { pad, character } = state;
  const direction = pad.directions[character.line][character.column];

  const newState = {
    ...state,
    pad: { ...state.pad }
  };

  if(padTransitions[direction] && padTransitions[direction].cond(pad)) {
    newState.pad = {
      ...newState.pad,
      ...padTransitions[direction].trans(pad)
    };
  }

  newState.pad.directions = getRandomTileDirections();

  return newState;
};

const padTransitions = {
  up: {
    cond: ({ line }) => line > 1,
    trans: ({ line }) => ({ line: line - 1 })
  },
  right: {
    cond: ({ column }) => column < (config.height - 2),
    trans: ({ column }) => ({ column: column + 1 })
  },
  down: {
    cond: ({ line }) => line < (config.height - 2),
    trans: ({ line }) => ({ line: line + 1 })
  },
  left: {
    cond: ({ column }) => column > 1,
    trans: ({ column }) => ({ column: column - 1 })
  }
};

export default padMoveReducer;
