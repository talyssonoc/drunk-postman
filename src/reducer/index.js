import character from './character';
import platform from './platform';
import stage from './stage';

const initialState = {
  character: character.initialState,
  platform: platform.initialState,
  stage: stage.initialState
};

const rootReducer = (state = initialState, { type, direction }) => {
  if(type === 'MOVE_CHAR'
    && character.canMoveTo(state.character, { direction })
  ) {
    const newState = Object.assign({}, state);

    newState.character = character(state.character, { type, direction });
    newState.platform = platform(state.platform, {
      type: 'MOVE_PLATFORM',
      direction: state.platform.directions[newState.character.line][newState.character.column]
    });

    return newState;
  }

  return state;
};

export default rootReducer;
