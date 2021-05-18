import React from "react"
import PropTypes from "prop-types"
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import HelloWorld from './HelloWorld'
import Home from './Home'
import configureStore from '../configureStore'
const store = configureStore();

class App extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <Switch>
            <Route exact path="/" render={() => <Home name="ColorMatch"/>} ></Route>
            <Route path="/new" render={() => <HelloWorld/> } ></Route>
          </Switch>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App
