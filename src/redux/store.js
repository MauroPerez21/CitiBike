import { createStore } from 'redux'
import rootReducer from './rootReducer'
import {composeWithDevTools} from 'redux-devtools'
export const store = createStore(rootReducer, composeWithDevTools)

