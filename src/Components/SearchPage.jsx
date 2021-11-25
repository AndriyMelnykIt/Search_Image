import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Button, Row } from 'react-bootstrap';
import { reqPhoto } from '../redux/ducks/ducksGeneration';
import TagsInput from 'react-tagsinput';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

const SearchPage = (props) => {
	const [tags, setTags] = useState ([]);
	console.log (tags);
	const history = useHistory ();

	const handleClick = tags => {
		setTags(tags);
	};

	const handleSearch = () => {
		if (tags.length) {
			props.SearchPage (tags);
			history.push('/photos');
		}
		return;
	};

	return (
		<div>
			<TagsInput value={tags} onChange={handleClick} />
			<Row className='justify-content-md-center'>
				<Button className='mt-2' size='lg' onClick={handleSearch}>Search</Button>
			</Row>
		</div>
	);
};
SearchPage.propTypes = {
	SearchPage: PropTypes.func.isRequired
};

const mapStateToProps = dispatch => ({
	SearchPage: tags => {
		dispatch (reqPhoto(tags));
	}
});
export default connect (null, mapStateToProps) (SearchPage);