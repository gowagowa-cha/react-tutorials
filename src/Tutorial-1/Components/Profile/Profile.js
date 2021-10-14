import React from 'react';
import './Profile.css';

	function ProfileFC({name = 'Anonim', registeredAt = new Date()}) {
		const [firstName] = name.split(' ')
		const date = registeredAt.toLocaleDateString('ru-RU',{ 
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
	

	return (
		<div className='profile'>
			<div>
				Привет, <b>{firstName}</b>!
			</div>
			<p>Дата регистрации: {date}</p>
		</div>
	);
}

export default ProfileFC;
