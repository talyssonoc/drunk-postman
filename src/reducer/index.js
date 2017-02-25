import character from './character';
import platform from './platform';

const rootReducer = (state, { type, direction }) => {
  if(type === 'MOVE_CHAR') {
    const newState = {};

    if(character.canMoveTo(state.character, { direction })) {
      newState.character = character(state.character, { type, direction });
      newState.platform = platform(state.platform, {
        type: 'MOVE_PLATFORM',
        direction: state.platform.directions[newState.character.line][newState.character.column]
      });

      return newState;
    }

    return state;
  }

  return {
    character: character.initialState,
    platform: platform.initialState
  };
};

export default rootReducer;
