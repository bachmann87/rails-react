import React from "react";
import PropTypes from "prop-types";
import { Button } from 'semantic-ui-react'
import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'

const GAME_MENU_REQUEST = "/new";
const GET_GAME_REQUEST = 'GET_GAME_REQUEST';
const GET_GAME_SUCCESS = 'GET_GAME_SUCCESS';

function startGame() {
  console.log("Starting the Game 2...");
  return dispatch => {
    dispatch({
      type: GET_GAME_REQUEST
    });
    return fetch(`v1/game.json`)
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

class Home extends React.Component {
  render() {

    const { game } = this.props;
    const gameWinner = game.map((game) => {
      return <div key="{game.rounds}">The winner is {game.winner} after {game.rounds} rounds!</div>
    });

    return (
      <React.Fragment>
        <div className="flex">
          <Button animated="fade">
            <Button.Content visible>A simple color match game</Button.Content>
            <Button.Content hidden onClick={() => this.props.startGame() }>Play now</Button.Content>
          </Button>
          <div className="winner-box">{gameWinner}</div>
        </div>
      </React.Fragment>
    );
  }
}

// Home.propTypes = {
//   name: PropTypes.string,
// };
// export default Home;

const struturedSelector = createStructuredSelector({
  game: state => state.game,
});

const mapDispatchToProps = { startGame };

export default connect(struturedSelector, mapDispatchToProps)(Home);
