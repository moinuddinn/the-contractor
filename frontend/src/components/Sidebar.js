// src/components/Sidebar.js
import React from 'react';
import { CSidebar, CSidebarBrand, CSidebarNav, CNavItem } from '@coreui/react';

const Sidebar = () => {
  return (
    <CSidebar>
      <CSidebarBrand className="d-none d-md-flex" to="/">
        Admin Panel
      </CSidebarBrand>
      <CSidebarNav>
        <CNavItem href="/">Dashboard</CNavItem>
        <CNavItem href="/users">Users</CNavItem>
        <CNavItem href="/settings">Settings</CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
