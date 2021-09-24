import React from 'react';

const SummaryTypes  = {
	'boolean': (value) => value ? 'si' : 'no', 
	'string': (value) => value,
	'object': value =>  value.filename,
}

const SummaryEntry = ({ name, value }) => {
	const getSummaryText = (value) => {
		return SummaryTypes[typeof value](value)
	};
	
	return (
		<div className="boxText">
			<strong>{name}: </strong>
			<span>{getSummaryText(value)}</span>
			
		</div>
	);
};

export default SummaryEntry;
