export const UserGreeting = () => {
	const isLoggedIn = true;

	return (
		<div>
			<p>This Welcome {isLoggedIn ? 'Vlad' : 'Guest'}</p>
			<p>{isLoggedIn && 'Secret message'}</p>
		</div>
	);
};
