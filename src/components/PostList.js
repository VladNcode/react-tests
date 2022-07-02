import { useState, useEffect } from 'react';
import styles from '../css/PostList.module.css';

export const PostList = () => {
	const [posts, setPosts] = useState([]);

	const getData = async () => {
		try {
			const res = await fetch('https://jsonplaceholder.typicode.com/posts');

			setPosts(await res.json());
		} catch (error) {
			console.error(error);
		}
	};

	useEffect(() => {
		getData();
	}, []);

	if (!posts) {
		return 'loading...';
	}

	return (
		<div>
			<ul>
				{posts.map(post => {
					return (
						<li key={post.id}>
							<p className={styles.id}>Post id: {post.id}</p>
							<p className={styles.title}>Title: {post.title}</p>
							<p className={styles.body}>Body: {post.body}</p>
							<br></br>
						</li>
					);
				})}
			</ul>
		</div>
	);
};
