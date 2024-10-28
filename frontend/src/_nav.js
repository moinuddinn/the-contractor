import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,cilClock,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,cilUser,
  cilSpeedometer,
  cilStar,cilHome,
  cilAddressBook,
  
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle, } from '@coreui/react'

const _nav = [
  {
    component: CNavTitle,
    name: 'Main',
  }, 
  {
    component : CNavItem,
    name :'Dashboard',
    to:'/',
    icon :<CIcon icon={cilHome} customClassName="nav-icon" />
  },
  {
    component : CNavItem,
    name :'Employees',
    to:'/employees/',
    icon :<CIcon icon={cilUser} customClassName="nav-icon" />
  },
  {
    component: CNavTitle,
    name: 'Management',
  }
  ,{
    component : CNavItem,
    name :'Shift',
    to:'/shift',
    icon :<CIcon icon={cilClock} customClassName="nav-icon" />
  },{
    component : CNavItem,
    name :'Attendance sheet',
    to:'/attendance_sheet',
    icon :<CIcon icon={cilAddressBook} customClassName="nav-icon" />
  },{
    component : CNavItem,
    name :'Sheet Report',
    to:'/sheet_report',
    icon :<CIcon icon={cilDrop} customClassName="nav-icon" />
  },{
    component : CNavItem,
    name :'Attendance Logs',
    to:'/attendance_logs',
    icon :<CIcon icon={cilDrop} customClassName="nav-icon" />
  },{
    component : CNavItem,
    name :'Attendence',
    to:'/attendence',
    icon :<CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component : CNavItem,
    name :'Supervisor',
    to:'/supervisor',
    icon :<CIcon icon={cilDrop} customClassName="nav-icon" />
  },
  {
    component: CNavItem,
    name: 'Patti',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
  },
  {
    component: CNavGroup,
    name: 'Pages',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      {
        component: CNavItem,
        name: 'Error 404',
        to: '/404',
      },
      {
        component: CNavItem,
        name: 'Error 500',
        to: '/500',
      },
    ],
  },
]

export default _nav
