import React from "react";
import "./Profile.css";

class ClassProfile extends React.Component {
  static defaultProps = {
    name: "No Name",
    registeredAt: new Date(),
  };

  render() {
    const { name, registeredAt } = this.props;
		const [firstName] = name.split(' ')
		const date = registeredAt.toLocaleDateString('ru-RU',{ 
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	})
    return (
      <div className="profile">
        <div>
          Привет, <b>{firstName}</b>!
        </div>
        <p>Дата регистрации: {date}</p>
      </div>
    );
  }

}
export default ClassProfile;
