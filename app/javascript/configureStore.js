import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'; 
import { composeWithDevTools } from 'redux-devtools-extension';


const initialState = {
    game: []
}

function rootReducer(state, action) {
    console.log(action.type);
    switch (action.type) {
        case 'GET_GAME_SUCCESS':
            return { game: action.json.game }
        default:
            return state;
    }
}

export default function configureStore() {
    const store = createStore(
        rootReducer, 
        initialState,
        composeWithDevTools(
            applyMiddleware(
                thunk,
            )
        )
    );
    return store;
}