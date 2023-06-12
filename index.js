import { legacy_createStore as createStore } from 'redux'

// Application's initial state values
const initialState = {
    theme: 'light',
    count: 0,
}

const store = createStore(function (state = initialState, action) {
    if (action.type === 'counter/increment') {
        // We have to copy current state so that `theme` is not lost during the increment process
        return { ...state, count: state.count + 1 }
    }
    if (action.type === 'counter/decrement') {
        // We have to copy current state so that `theme` is not lost during the decrement process
        return { ...state, count: state.count - 1 }
    }
    // If there's no action (store setup process), return initialState
    return state
})

// Invokes whenever there's a new state
store.subscribe(() => {
    console.log('New state:', store.getState())
})

store.dispatch({ type: 'counter/increment' }) // creates a new state tree
store.dispatch({ type: 'counter/increment' }) // creates a new state tree
store.dispatch({ type: 'counter/increment' }) // creates a new state tree
store.dispatch({ type: 'counter/increment' }) // creates a new state tree
store.dispatch({ type: 'counter/decrement' }) // creates a new state tree
store.dispatch({ type: 'counter/decrement' }) // creates a new state tree
