export const ClickHandler = () => {
	const clickHandler = (event, count = 1) => {
		console.log(count);
		// console.log(event);
		console.log('Button clicked!');
	};

	return (
		<div>
			<button onClick={clickHandler}>Click</button>
			<button onClick={event => clickHandler(event, 5)}>Click 5</button>
		</div>
	);
};
