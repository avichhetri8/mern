import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

import MainHeader from './MainHeader';
import NavLinks from './NavLinks'
import './MainNavigation.css';
import SideDrawer from './SideDrawer'

const MainNavigation = props => {
  return (
      <MainHeader>
        <button
          className="main-navigation__menu-btn"
        
        >
          <span />
          <span />
          <span />
        </button>
        <h1 className="main-navigation__title">
          <Link to="/">YourPlaces</Link>
        </h1>
        <nav className="main-navigation__header-nav">
            <NavLinks/>
        </nav>
      </MainHeader>
  
  );
};

export default MainNavigation;
