import { useState } from 'react';

export const PostForm = () => {
	const [userId, setUserId] = useState('');
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const submitHandler = async event => {
		event.preventDefault();
		try {
			const data = await fetch('https://jsonplaceholder.typicode.com/posts', {
				method: 'POST',
				body: JSON.stringify({
					title,
					body,
					userId,
				}),
				headers: {
					'Content-type': 'application/json; charset=UTF-8',
				},
			});

			console.log(await data.json());
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<form onSubmit={submitHandler}>
			<div>
				<input
					type="text"
					placeholder="User ID"
					value={userId}
					onChange={e => setUserId(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Title"
					value={title}
					onChange={e => setTitle(e.target.value)}
				></input>
				<input
					type="text"
					placeholder="Body"
					value={body}
					onChange={e => setBody(e.target.value)}
				></input>
				<button type="submit">Submit</button>
			</div>
		</form>
	);
};
