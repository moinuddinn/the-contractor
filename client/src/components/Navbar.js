// src/components/Navbar.js
import React from 'react';
import { CNavbar, CNavbarBrand } from '@coreui/react';

const Navbar = () => {
  return (
    <CNavbar>
      <CNavbarBrand href="#">Admin Dashboard</CNavbarBrand>
    </CNavbar>
  );
};

export default Navbar;
