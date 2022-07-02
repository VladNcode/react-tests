// const Greet = () => <h1>Hello, world!</h1>;

// export default Greet;

// const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

export const Greet = ({ name, hero, children }) => {
	return (
		<div>
			<h1>
				Hello, {name}, I know that you are {hero}!
			</h1>
			{children}
		</div>
	);
};
