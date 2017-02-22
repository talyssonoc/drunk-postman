const characterTransitions = {
  up: ({ line }) => ({ line: line - 1 }),
  right: ({ column }) => ({ column: column + 1 }),
  down: ({ line }) => ({ line: line + 1 }),
  left: ({ column }) => ({ column: column - 1 })
};

const character = (state, { type, direction }) => {
  if(type === 'MOVE_CHAR' && characterTransitions[direction]) {
    return Object.assign(
      {}, state,
      characterTransitions[direction](state)
    );
  }

  return state;
};

character.canMoveTo = ({ line, column }, { direction }) => {
  switch(direction) {
  case 'up':
    return line > 0;
  case 'right':
    return column <= 1;
  case 'down':
    return line <= 1;
  case 'left':
    return column > 0;
  }
};

character.initialState  = {
  line: 0,
  column: 0
};

export default character;
