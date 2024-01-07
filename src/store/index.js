import {applyMiddleware, combineReducers, createStore} from 'redux'
import { thunk } from 'redux-thunk'
import { menuReducer } from './menuReducer';
import { blogReducer } from './blogReducer';
import { workReducer } from './workReducer';


const rootReducer = combineReducers({
  menu: menuReducer,
  blogs: blogReducer,
  works: workReducer
}, [])

export const store = createStore(rootReducer, applyMiddleware(thunk));