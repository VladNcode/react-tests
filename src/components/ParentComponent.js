import { ChildComponent } from './ChildComponent';

export const ParentComponent = () => {
	const greetParent = test => {
		alert(test);
	};

	return <ChildComponent greetHandler={greetParent} />;
};
