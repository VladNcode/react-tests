import './css/App.css';
import './css/AppStyles.css';
import styles from './css/AppStyles.module.css';
import { Greet } from './components/Greet';
import { Message } from './components/Message';
import { ClickHandler } from './components/ClickHandler';
import { ParentComponent } from './components/ParentComponent';
import { UserGreeting } from './components/UserGreeting';
import { NameList } from './components/NameList';
import { StyleSheet } from './components/Stylesheet';
import { InlineStyling } from './components/InlineStyling';
import { Form } from './components/Form';
import { PostList } from './components/PostList';
import { PostForm } from './components/PostForm';
import { UseTransit } from './components/UseTransition';

function App() {
	return (
		<div className="App">
			{/* <Greet name="Bruce" hero="Batman" />

			<Greet name="Clark" hero="Superman">
				<button>Action</button>
			</Greet>

			<Greet name="Diana" hero="Wonder Woman">
				<p>This is children props</p>
			</Greet> */}

			{/* <Message /> */}
			{/* <ClickHandler /> */}
			{/* <ParentComponent /> */}
			{/* <UserGreeting /> */}
			{/* <NameList /> */}
			{/* <StyleSheet /> */}
			{/* <InlineStyling /> */}
			{/* <Form /> */}
			{/* <h1 className="error">Error</h1>
			<h1 className={styles.success}>Error</h1> */}
			{/* <PostList /> */}
			{/* <PostForm /> */}
			<UseTransit />
		</div>
	);
}

export default App;
