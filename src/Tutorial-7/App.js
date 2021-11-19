import React from "react";
import { Button, TextField } from "@mui/material";
import { useForm } from "react-hook-form";

import "./index.scss";

function App() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isDirty },
	} = useForm();
	const onSubmit = (data) => console.log("Форма: ", data);

	function clear() {
		reset({ firstName: "", fullName: "", email: "", password: "" });
		
	}

	return (
		<div className='app'>
			<div className='raw'>
				<div>
					<TextField
						name='firstName'
						label='Имя'
						variant='outlined'
						{...register("firstName", {
							required: "это поле обязательно",
							minLength: 3,
						})}
						helperText={errors.firstName && errors.firstName.message}
						error={!!errors.firstName}
					/>

					<TextField
						name='fullName'
						label='Фамилия'
						variant='outlined'
						{...register("fullName", {
							required: "это поле обязательно",
							minLength: 3,
						})}
						helperText={errors.fullName && errors.fullName.message}
						error={!!errors.fullName}
					/>
				</div>
				<div>
					<TextField
						name='email'
						label='почта'
						variant='outlined'
						{...register("email", {
							required: "это поле обязательно",
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-z0-9.-]+\.[A-Z]{2,}$/i,
								message: "Неверный адрес!",
							},
						})}
						helperText={errors.email && errors.email.message}
						error={!!errors.email}
					/>
					<TextField
						name='password'
						type='password'
						label='пароль'
						variant='outlined'
						{...register("password", {
							required: "это поле обязательно",
							minLength: 3,
						})}
						helperText={errors.password && errors.password.message}
						error={!!errors.password}
					/>
				</div>
			</div>
			<div className='button'>
				<div>
					<Button
						variant='contained'
						color='success'
						onClick={handleSubmit(onSubmit)}
						disabled={!isDirty}>
						Отпрaвить
					</Button>
				</div>
				<div>
					<Button variant='contained' color='warning' onClick={clear}>
						удалить
					</Button>
				</div>
			</div>
		</div>
	);
}

export default App;
