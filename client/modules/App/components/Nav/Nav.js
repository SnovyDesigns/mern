import React from 'react';
import { FormattedMessage } from 'react-intl';

import styles from './Nav.css';

const Nav = () => {
  return (
    <nav className={styles.navigation}>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/posts">Posts</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      {/* <p>
        <FormattedMessage id="twitterMessage" /> :{' '}
        <a href="https://twitter.com/@mern_io" target="_Blank">
          @mern_io
        </a>
      </p> */}
    </nav>
  );
};

export default Nav;
