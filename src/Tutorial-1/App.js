import React from 'react';
import Profile from './Components/Profile/Profile';

const dateRegistration = new Date(2021, 10, 12);

function App() {
	return (
		<div>
			<Profile name='Вася' registeredAt={dateRegistration} />
		</div>
	);
}

export default App;
