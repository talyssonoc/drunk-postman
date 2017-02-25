import React from 'react';

const PlatformTile = (props) => (
  <div style={style(props)} />
);

const arrowRotation = {
  up: -90,
  down: 90,
  right: 0,
  left: 180
};

const arrowStyle = ({ direction }) => ({
  background: 'url(./images/arrow.png) center center no-repeat',
  mixBlendMode: 'overlay',
  transform: `rotate(${arrowRotation[direction]}deg)`,
  transition: 'transform 200ms'
});

const charStyle = ({ character }) => ({
  background: `url(./images/car-${character.direction}.png) center center no-repeat`
});

const style = ({ hasCharacter, direction, character }) => Object.assign({
  flex: '1 0 auto',
  float: 'left',
  textAlign: 'center'
}, hasCharacter ? charStyle({ character }) : arrowStyle({ direction }));

export default PlatformTile;
