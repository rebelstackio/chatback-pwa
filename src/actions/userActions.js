"use strict";
import database from "../firebase";
import User from "../models/user";

export function getUsers() {
	return function(dispatch) {
		//TODO HANDLE AXIOS RESPONSE WITH HTTP CODES
		User.getAll().then(data=>{
			dispatch(
				{
					type: "GET_USERS_FULFILLED",
					payload: data.data.data
				}
			);
		}).catch(error =>{
			dispatch(
				{
					type: "GET_USERS_REJECTED",
					payload: {
						error: error
					}
				}
			);
		})
	}
}

export function getUserMessages(id) {
	const path = '/messages/' + id  +'/';
	return function( dispatch) {
		database.ref(
			path
		).orderByChild(
			'createdAt'
		).limitToLast(
			50
		).once('value').then (data => {
			dispatch(
				{
					type: "GET_USERS_MESSAGES_FULFILLED",
					payload: data.val()
				}
			);
		}).catch( error => {
			//TODO HANDLE ERRORS
			console.log(error);
		});
	}
}

export function setSelectedUser(user) {
	return function( dispatch) {
		dispatch(
			{
				type: "SET_SELECTED_USER",
				payload: user
			}
		);
	}
}
