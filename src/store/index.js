import { createStore, applyMiddleware, compose } from "redux"
import thunk from 'redux-thunk';

import rootReducer from "../reducers"


const saveToLocalStorage = state => {
  try {
    const serializedState = JSON.stringify(state)
    localStorage.setItem("state", serializedState)
  } catch (e) {
    if (e instanceof ReferenceError) return
    // console.log(e)
  }
}

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state")
    if (serializedState === null) return undefined
    return JSON.parse(serializedState)
  } catch (e) {
    if (e instanceof ReferenceError) return undefined
    // console.log(e)
    return undefined
  }
}

const persistedState = loadFromLocalStorage()



const store = createStore(
  rootReducer,
  persistedState,
  compose(  applyMiddleware(thunk),
  typeof window !== "undefined" && window.__REDUX_DEVTOOLS_EXTENSION__
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : f => f)
)

store.subscribe(() => {
  const state = store.getState()
  saveToLocalStorage(state)
})

export default store
