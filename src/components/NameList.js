export const NameList = () => {
	const names = ['John', 'Sarah', 'Bob', 'George'];

	return (
		<div>
			{names.map((name, i) => {
				return <h2 key={i + name}>Hello, {name}!</h2>;
			})}
		</div>
	);
};
