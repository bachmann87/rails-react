import React from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'

const GET_GAME_REQUEST = 'GET_GAME_REQUEST';
const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS';

function startGame() {
  console.log("Starting the Game...");
  return dispatch => {
    dispatch({
      type: GET_GAME_REQUEST
    });
    return fetch(`v1/game.json`, {
      method: "POST"
    })
      .then(response => response.json())
      .then(json => dispatch(getGameSuccess(json)))
      .catch(error => console.log(error))
  };
}

export function getGameSuccess(json) {
  return {
    type: GET_GAME_SUCCESS,
    json
  }
}

class HelloWorld extends React.Component {

  render () {

    const { game } = this.props;
    const gameList = game.map((game) => {
      return <li key="{game.guid}">{game.name}</li>
    });

    return (
      <React.Fragment>
        <button className="startGameBtn" onClick={() => this.props.startGame() }>Start Game</button>
        <br/>
        <ul>{gameList}</ul>
      </React.Fragment>
    );
  }
}

const struturedSelector = createStructuredSelector({
  game: state => state.game,
});

const mapDispatchToProps = { startGame };

export default connect(struturedSelector, mapDispatchToProps)(HelloWorld);
