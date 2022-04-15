import { useState, useEffect } from 'react';
import axios from 'axios';
import User from '../user';
import { data as userData } from '../../data/dummyUsers';
import styles from './userbar.module.css';

const API_URL = 'https://jsonplaceholder.typicode.com/users';

const UserBar = ({ currentUser, setCurrentUser }) => {
  // Replace with Redux Calls
  const [data, setData] = useState(userData);

  const getUserData = async () => {
    await axios
      .get(API_URL)
      .then((users) => {
        setData(users.data);
      })
      .catch((err) => {
        console.error(`Error loading users from URL: ${err}`);
      });
  };

  useEffect(async () => {
    await getUserData();
  }, []);

  return (
    <div className={styles.main}>
      <h2>Users</h2>
      {data.map((userData, _) => {
        const user = {
          ...userData,
          currentUser: currentUser === userData.id,
          cb: () => {
            setCurrentUser(userData.id);
          },
        };
        return <User key={`user-${user.id}`} {...user} />;
      })}
    </div>
  );
};

export default UserBar;
