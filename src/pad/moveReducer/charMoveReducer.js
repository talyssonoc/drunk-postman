const charMoveReducer = (state, { direction }) => {
  if(characterTransitions[direction]) {
    return {
      ...state,
      character: {
        ...state.character,
        ...characterTransitions[direction](state.character),
        direction
      }
    };
  }

  return state;
};

const characterTransitions = {
  up: ({ line }) => ({ line: line - 1 }),
  right: ({ column }) => ({ column: column + 1 }),
  down: ({ line }) => ({ line: line + 1 }),
  left: ({ column }) => ({ column: column - 1 })
};

export default charMoveReducer;
