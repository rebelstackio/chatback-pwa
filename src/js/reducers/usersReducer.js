"use strict";

export default function reducer(
	state = {
		list: {},
		// fetching: false,
		// fetched: false,
		error: null
	},
	action
){
	switch (action.type) {
		case 'USERS_ADDED':
			return{
				...state,
				list: {
					...state.list,
					[action.payload.id]: {
						...action.payload.user
					}
				}
			}
			break;
	}
	return state;
}
