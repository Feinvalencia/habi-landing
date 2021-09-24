import React, {  useEffect } from 'react';
import { Route, useHistory, useRouteMatch } from 'react-router-dom';

const DynamicForm = ({ steps, step, ...props }) => {
	const match = useRouteMatch();
	const history = useHistory();

	useEffect(() => {
		history.push(match.path + steps[step].path);
	}, [step]);

	const computeStepComponent = ({ path, component: Component }) => (
		<Route key={path} path={match.path + path}>
			<Component />
		</Route>
	);

	return <div ><form {...props}>{steps.map(computeStepComponent)}</form></div>;
};

export default DynamicForm;
	