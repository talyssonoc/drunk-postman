import range from 'lodash.range';

const DIRECTIONS = {
  0: 'up',
  1: 'right',
  2: 'down',
  3: 'left'
};

const getRandomTileDirections = () => (
  range(3).map(() => range(3).map(getRandomDirection))
);

const getRandomDirection = () => DIRECTIONS[Math.floor(Math.random() * 4)];

export default getRandomTileDirections;
