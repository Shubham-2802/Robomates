import React from 'react';

const Searchbox = ({searchfield, searchchange}) => {
	return(
		<div className="pa2">
			<input 
			className="tc pa3 ba b--green bg-lightest-blue"
			type="search" 
			placeholder="Search robos"
			onChange={searchchange}
			/>
		</div>
		);
}

export default Searchbox;