import React from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';

import LandingPage from '@/components/pages/landing-page';

const App = () => {
	return (
		<BrowserRouter>
			<Route path='/' component={LandingPage} />
			{/* <Route path='*' children={<Redirect to='/' />} /> */}
		</BrowserRouter>
	);
};

export default App;
