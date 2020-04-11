import { combineReducers } from 'redux';
import goalReducer from './goal.reducer';
import profileReduer from './profile.reducer';

const appReducer = combineReducers({
    goal: goalReducer,
    profile: profileReduer
})

export default (state, action) => {

    return appReducer(state, action)
}