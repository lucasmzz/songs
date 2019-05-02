import React, {Component} from 'react';
import {connect} from 'react-redux';

class SongDetail extends Component {

	render(){
		return(
			(this.props.selectedSong) ? 
				<div className="ui segment">
					<h4>Title: {this.props.selectedSong.title}</h4>
					<p>Duration: {this.props.selectedSong.length}</p>

				</div> 
			: 
				<div>select a song...</div>
		);
	};
}

const mapStateToProps = (state) => {
	return {selectedSong: state.selectedSong};
};

export default connect(mapStateToProps)(SongDetail);