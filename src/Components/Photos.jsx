import React from 'react';
import { Card, CardGroup } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import { Picture, Spinner } from './AllComponents';

const Photos = (props) => {
	const { photos, loading } = props;

	if (loading) {
		return <Spinner />;
	}

	return (
		<div>
			{photos.length ? (
				<Card className='mb-3'>
					{photos.map (photo => {
						return <Picture key={photo.id} photo={photo}/>;
					})}
				</Card>
			) : (
				<span>No photos more</span>
			)}
		</div>
	);
};

Photos.propTypes = {
	photos: PropTypes.array.isRequired,
	loading: PropTypes.bool
};
const mapStateToProps = state => {
	return {
		photos: state.reducer.photos,
		loading: state.reducer.loading
	};
};

export default connect (mapStateToProps, null) (Photos);