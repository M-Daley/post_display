import styles from './post.module.css';

const Post = ({ title = 'Title', body = 'No Posts' }) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
};

export default Post;
