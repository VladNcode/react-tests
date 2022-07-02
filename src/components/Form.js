import { useState } from 'react';

export const Form = () => {
	const [username, setUsername] = useState('');
	const [description, setDescription] = useState('');
	const [country, setCountry] = useState('');

	const handleUsername = event => {
		event.preventDefault();
		alert(`Form username is: "${username}"`);
	};

	const handleDescription = event => {
		event.preventDefault();
		alert(`Form description is: "${description}"`);
	};

	const handleCountry = event => {
		event.preventDefault();
		alert(`Form country is: "${country}"`);
	};

	return (
		<div>
			<form onSubmit={handleUsername}>
				<div>
					<label>Pick your username: </label>
					<input
						type="text"
						value={username}
						onChange={event => setUsername(event.target.value)}
					></input>
					<button type="submit">Submit</button>
				</div>
			</form>

			<form onSubmit={handleDescription}>
				<div>
					<label>Pick your description: </label>
					<input
						type="textarea"
						value={description}
						onChange={event => setDescription(event.target.value)}
					></input>
					<button type="submit">Submit</button>
				</div>
			</form>

			<form onSubmit={handleCountry}>
				<label>
					Pick your country:{' '}
					<select value={country} onChange={event => setCountry(event.target.value)}>
						<option value="Ukraine">Ukraine</option>
						<option value="Asa">USA</option>
						<option value="Canada">Canada</option>
						<option value="Japan">Japan</option>
					</select>
				</label>
				<input type="submit" value="Submit" />
			</form>
		</div>
	);
};
