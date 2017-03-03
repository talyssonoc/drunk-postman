import { getRandomTileDirections } from '../pad';

const initialState = {
  game: {},
  stage: {},
  character: {
    line: 0,
    column: 0,
    direction: 'down'
  },
  pad: {
    line: 1,
    column: 1,
    directions: getRandomTileDirections()
  }
};

const gameReducer = (state = initialState/*, action */) => {
  return state;
};

export default gameReducer;
