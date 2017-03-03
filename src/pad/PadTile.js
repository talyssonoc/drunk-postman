import React from 'react';

const PadTile = (props) => (
  <div style={style(props)} />
);

const style = ({ hasCharacter, character, direction }) => Object.assign({
  flex: '1 0 auto',
  float: 'left',
  textAlign: 'center'
}, hasCharacter ? charStyle({ character }) : arrowStyle({ direction }));

const arrowStyle = ({ direction }) => ({
  background: 'url(./images/arrow.png) center center no-repeat',
  mixBlendMode: 'overlay',
  transform: `rotate(${arrowRotation[direction]}deg)`,
  transition: 'transform 200ms'
});

const arrowRotation = {
  up: -90,
  right: 0,
  down: 90,
  left: 180
};

const charStyle = ({ character }) => ({
  background: `url(./images/car-${character.direction}.png) center center no-repeat`
});

export default PadTile;
