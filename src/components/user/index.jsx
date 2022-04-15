import styles from './user.module.css';

const User = ({ username = 'Unknown User', currentUser, cb }) => {
  return (
    <div className={styles.main} onClick={cb}>
      <div
        className={currentUser ? styles.active : null}
        style={{ padding: '.75rem' }}
      >
        <p>{username}</p>
      </div>
    </div>
  );
};

export default User;
