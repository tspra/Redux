import counterReducer from './counter.Reducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
    counter:counterReducer
})
export default allReducers;