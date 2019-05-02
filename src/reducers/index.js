import React from 'react';
import { combineReducers } from 'redux';

const songsReducer = () => {
	return [
		{title: 'so what', length: '3:21'},
		{title: 'let it be', length: '2:23'},
		{title: 'abrazame', length: '5:16'},
		{title: 'inhospito', length: '2:59'},
		{title: 'mira', length: '4:01'},
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED"){
		return action.payload;
	}
	return selectedSong;
};

export default combineReducers({
	songs: songsReducer,
	selectedSong: selectedSongReducer
});