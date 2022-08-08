import PropTypes from 'prop-types';
import { useState } from 'react';
import NavButton from './NavButton';
import styles from '../../styles/modules/Navigation.module.scss';

const Navigation = ({ pages, handleSetPage, currentPageName }) => {
  return (
    <nav className={styles.nav}>
      {pages.map((page, idx) => (
        <NavButton
          key={`navButton_${idx}`}
          page={page.name}
          handleSetPage={() => handleSetPage(page)}
          isCurrent={page.name === currentPageName}
        />
      ))}
    </nav>
  );
};

Navigation.propTypes = {
  pages: PropTypes.array.isRequired,
  handleSetPage: PropTypes.func.isRequired,
  currentPageName: PropTypes.string.isRequired,
};

export default Navigation;
