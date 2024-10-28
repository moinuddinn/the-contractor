// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import employeesReducer from '../slice/EmployeeSlice'

const store = configureStore({
  reducer: {
    employees: employeesReducer,
  },
});

export default store;
