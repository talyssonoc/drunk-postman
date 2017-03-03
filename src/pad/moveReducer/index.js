import reduce from 'reduce-reducers';
import charMoveReducer from './charMoveReducer';
import padMoveReducer from './padMoveReducer';

const successfulMoveReducer = reduce(charMoveReducer, padMoveReducer);

const moveReducer = (state, { type, direction }) => {
  if(type === 'MOVE_CHAR'
    && charCanMove[direction] && charCanMove[direction](state.character)
  ) {
    return {
      ...state,
      ...successfulMoveReducer(state, { direction })
    };
  }

  return state;
};

const charCanMove = {
  up: ({ line }) => line > 0,
  right: ({ column }) => column <= 1,
  down: ({ line }) => line <= 1,
  left: ({ column }) => column > 0
};

export default moveReducer;
