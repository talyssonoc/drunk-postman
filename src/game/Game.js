import React from 'react';
import { connect } from 'react-redux';
import Board from './Board';

const KEYCODES = {
  37: 'left',
  38: 'up',
  39: 'right',
  40: 'down'
};

class Game extends React.Component {
  componentDidMount() {
    document.addEventListener('keyup', ({ keyCode }) => {
      this.props.move(KEYCODES[keyCode]);
    });
  }

  render() {
    return (
      <Board
        height={this.props.height}
        tileSize={this.props.tileSize}
        width={this.props.width}
      />
    );
  }
}

export default connect(
  null,
  (dispatch) => ({
    move: (direction) => dispatch({ type: 'MOVE_CHAR', direction: direction })
  })
)(Game);
