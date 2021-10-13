import React from 'react';
import './Profile.css';

class ClassProfile extends React.Component {
	constructor({ name, registeredAt }) {
		super();
		this.name = name;
		this.registeredAt = registeredAt;
	}
	montoToStr(num) {
		return num > 12 || num < 1
			? null
			: 'январь,февраль,март,апрель,май,июнь,июль,август,сентября,октября,ноября,декабря'.split(
					',',
			  )[num - 1];
	}

	theDate() {
		const day = this.registeredAt.getDate();
		const month = this.registeredAt.getMonth();
		const year = this.registeredAt.getFullYear();

		return `${day} ${this.montoToStr(month)} ${year}`;
	}

	render() {
		return (
			<div className='profile'>
				<div>
					Привет, <b>{this.name}</b>!
				</div>
				<p>Дата регистрации: {this.theDate(this.registeredAt)}</p>
			</div>
		);
	}
}

export default ClassProfile;
