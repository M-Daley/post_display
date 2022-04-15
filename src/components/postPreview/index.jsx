import { useState, useEffect } from 'react';
import Post from '../post';
import { data as postData } from '../../data/dummyPosts';
import styles from './postpreview.module.css';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const PostPreview = ({ currentUser }) => {
  // Replace with Redux Calls
  const [data, setData] = useState(postData);

  const getPostData = async () => {
    await axios
      .get(`${API_URL}`)
      .then((users) => {
        setData(users.data);
      })
      .catch((err) => {
        console.error(`Error loading users from URL: ${err}`);
      });
  };

  const getCurrentUsersPosts = () => {
    return data.filter(({ userId }) => userId === currentUser);
  };

  useEffect(async () => {
    await getPostData();
  }, []);

  return (
    <div className={styles.container}>
      <h2>Posts</h2>
      <div className={styles.posts}>
        {getCurrentUsersPosts().map((post, idx) => {
          return <Post key={`post-${idx}`} {...post} />;
        })}
      </div>
    </div>
  );
};

export default PostPreview;
