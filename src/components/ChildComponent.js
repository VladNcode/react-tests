export const ChildComponent = ({ greetHandler }) => {
	return (
		<div>
			<button onClick={() => greetHandler('Suh dude')}>Greet parent</button>
		</div>
	);
};
