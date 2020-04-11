import { goalTypes } from './actionTypes';

export const createGoal = (goal) => {
    return {
        type: goalTypes.CREATE_GOAL,
        goal: goal
    }
}

export const editGoal = (goal) => {
    return {
        type: goalTypes.EDIT_GOAL,
        goal: goal
    }
}

export const fetchUsersNum = () => {
    console.log("HERE");
    return async dispatch => {

        try {
            const response = await fetch(
                'http://192.168.0.184:5000/hello',
                {
                    method: 'GET'
                }
            )
            // const response = await fetch(
            //     'https://www.googleapis.com/customsearch/v1?key=INSERT_YOUR_API_KEY&cx=017576662512468239146:omuauf_lfve&q=lectures'
            //   );
            // if (!response.ok) {
            //     throw new Error('Something went wrong!');
            // }
            if (!response.ok) {
                console.log("response is", response);
            } else {
                const resData = await response.json();
                console.log("YAY response is", resData);
                console.log("status");
            }
        } catch (err) {
            throw err;
        }

    };
}