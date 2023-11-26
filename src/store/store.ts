import {combineReducers, legacy_createStore} from 'redux'
import {mainReducer} from "store/main/main.reducer";


const rootReducer = combineReducers({
  main: mainReducer,
  //modal: modalReducer
  })

export const store = legacy_createStore(rootReducer)

export type AppRootStateType = ReturnType<typeof rootReducer>

// @ts-ignore
window.store = store