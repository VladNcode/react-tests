import { useState, useTransition } from 'react';
import NAMES from '../data/data.json';

export const UseTransit = () => {
	const [query, setQuery] = useState('');
	const [inputValue, setInputValue] = useState('');
	const [isPending, startTransition] = useTransition();

	const changeHandler = e => {
		e.preventDefault();
		setInputValue(e.target.value);
		startTransition(() => setQuery(e.target.value));
	};
	const filteredNames = NAMES.filter(
		item => item.first_name.includes(query) || item.last_name.includes(query),
	);

	return (
		<div>
			<input type="text" value={inputValue} onChange={changeHandler} />
			{isPending && <p>Updating list...</p>}
			{filteredNames.map(item => {
				return (
					<p key={item.id}>
						{item.first_name} {item.last_name}
					</p>
				);
			})}
		</div>
	);
};
