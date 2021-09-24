import React from 'react';

import SummaryEntry from '@/components/molecules/summary-entry';

const FormSummary = ({ labels, values }) => {
	const computeFormSummary = (values) =>
		Object.keys(values).map((key) => {
			return values[key] ? <SummaryEntry name={labels[key]} value={values[key]} /> : null;
		});

	return <div>{computeFormSummary(values)}</div>;
};

export default FormSummary;
