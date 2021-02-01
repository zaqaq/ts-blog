import {combineReducers} from 'redux'
import {countReducer} from './count/reducers'

const rootReducer = combineReducers({
    count: countReducer
})

export default rootReducer;
export type RootState = ReturnType<typeof rootReducer>
