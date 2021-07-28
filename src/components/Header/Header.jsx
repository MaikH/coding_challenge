import React from 'react';
import './header.scss';
import logo from '../../assets/logo.svg';
import addIcon from '../../assets/icons/plus.svg';
import mediaIcon from '../../assets/icons/media.svg';
import textIcon from '../../assets/icons/text.svg';
import lockIcon from '../../assets/icons/lock.svg';

const Header = () => (
  <header className="header">
    <img src={logo} className="header__logo" alt="logo" />
    <div className="header__icons">
      <img src={addIcon} className="header__icon" alt="add new default text note" />
      <img src={textIcon} className="header__icon" alt="hide text notes from workspace" />
      <img src={mediaIcon} className="header__icon" alt="hide media notes from workspace" />
      <img src={lockIcon} className="header__icon" alt="lock all notes (disable interactions)" />
    </div>
  </header>
);

export default Header;
