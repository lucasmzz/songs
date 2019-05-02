import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component {

	renderList(){
		
		return this.props.songs.map((song) => {
			return(
				<div className="item" key={song.title}>
					<div className="right floated content">
						<button type="submit" value="Select" onClick={() => this.props.selectSong(song)} className="ui primary button">Select</button>
					</div>
					<div>{song.title}</div>
				</div>
			); 
		});
	}

	render(){
		return(
			<div className="ui divided list">{this.renderList()}</div>
		);
	}
}

const mapStateToProps = (state) => {
	return { songs: state.songs };
};

export default connect(mapStateToProps,{selectSong})(SongList);