import React from 'react';
import './Profile.css';

function Profile({ name, registeredAt }) {
	function montoToStr(num) {
		return num > 12 || num < 1
			? null
			: 'январь,февраль,март,апрель,май,июнь,июль,август,сентября,октября,ноября,декабря'.split(
					',',
			  )[num - 1];
	}

	const date = registeredAt.getDate();
	const month = registeredAt.getMonth();
	const year = registeredAt.getFullYear();

	return (
		<div className='profile'>
			<div>
				Привет, <b>{name}</b>!
			</div>
			<p>Дата регистрации: {`${date} ${montoToStr(month)} ${year}`}</p>
		</div>
	);
}

export default Profile;
