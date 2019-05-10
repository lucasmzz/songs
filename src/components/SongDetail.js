import React from 'react';
import {connect} from 'react-redux';

const SongDetail = ({ selectedSong }) => {
	return(
			(selectedSong) ? 
				<div className="ui segment">
					<h4>Title: {selectedSong.title}</h4>
					<p>Duration: {selectedSong.length}</p>

				</div> 
			: 
				<div>select a song...</div>
	);
}

const mapStateToProps = (state) => {
	return {selectedSong: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);