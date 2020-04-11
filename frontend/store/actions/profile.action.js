import { profileTypes } from './actionTypes';

export const getProfile = (username, password, journeyId) => {
    // return {
    //     type: profileTypes.GET_PROFILE,
    //     username: username,
    //     password: password
    // }
    return async dispatch => {

        try {
            const response = await fetch(
                'http://192.168.0.184:5000/get-profile',
                {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                      username,
                      password
                    })
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