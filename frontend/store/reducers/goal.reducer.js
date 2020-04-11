import { goalTypes } from '../actions/actionTypes';
import { updateObject } from '../../shared/utility';

const initialState = {
    goals: null,
    goal: null
}

const createGoal = (state, action) => {
    if (state.goals !== null && state.goals !== undefined) {
        let newGoals = state.goals.concat(action.goal);
        return updateObject( state, {
            goals: newGoals
        });
    }
    return updateObject( state, {
        goals: [action.goal]
    });
}

const editGoal = (state, action) => {
    return updateObject( state, {
        goal: action.goal
    });
}

const reducer = ( state = initialState, action ) => {
    switch ( action.type ) {
        case goalTypes.CREATE_GOAL: return createGoal(state, action);
        case goalTypes.EDIT_GOAL: return editGoal(state, action);
        default: return state;
    }
};

export default reducer;