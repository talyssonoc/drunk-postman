import { combineReducers } from 'redux';

import character from './character';
import pillow from './pillow';

const rootReducer = (state, { type, direction }) => {
  if(type === 'MOVE_CHAR') {
    const newState = {};

    if(character.canMoveTo(state.character, { direction })) {
      newState.character = character(state.character, { type, direction });
      newState.pillow = pillow(state.pillow, {
        type: 'MOVE_PILLOW',
        direction: state.pillow.directions[newState.character.line][newState.character.column]
      });

      return newState;
    }

    return state;
  }

  return {
    character: character.initialState,
    pillow: pillow.initialState
  };
};

export default rootReducer;
