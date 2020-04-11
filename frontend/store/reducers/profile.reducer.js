import { profileTypes } from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    profile: null
}

const getProfile = (state, action) => {
    return updateObject( state, {
        profile: action.profile
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case profileTypes.GET_PROFILE: return getProfile(state, action);
        default: return state;
    }
};

export default reducer;