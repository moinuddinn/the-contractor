import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react';
import { Link } from 'react-router-dom';

// Utility function to format date to d-m-y
const formatDate = (dateString) => {
  const date = new Date(dateString);
  
  // Check for invalid date
  if (isNaN(date.getTime())) {
    return 'Invalid Date'; // or return an empty string if preferred
  }
  
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};

const Employees = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0]); // Default date to today
  const [selectedShift, setSelectedShift] = useState('all');
  const [selectedCompany, setSelectedCompany] = useState('all');

  // Sample data for companies
  const companies = ['Veg Pro - Filling', 'Shiv Edibles - Fitting', 'Chhilka', 'Cake Filling', 'Mustard Fitting'];
  const shifts = ['all', 'day', 'night'];

  useEffect(() => {
    const fetchAttendanceByDate = async () => {
      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`http://localhost:5000/api/employee/attendancebydate/${selectedDate}`);
        setAttendanceRecords(response.data || []);
      } catch (err) {
        setError(err.response?.data?.message || 'Error fetching attendance data for selected date');
      } finally {
        setLoading(false);
      }
    };

    fetchAttendanceByDate();
  }, [selectedDate]);

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value); // Update selected date
  };

  const handleShiftChange = (event) => {
    setSelectedShift(event.target.value); // Update selected shift
  };

  const handleCompanyChange = (event) => {
    setSelectedCompany(event.target.value); // Update selected company
  };

  // Filter attendance records based on selected shift and company
  const filteredRecords = attendanceRecords.filter(record => {
    const isShiftMatch = selectedShift === 'all' || record.shift === selectedShift;
    const isCompanyMatch = selectedCompany === 'all' || record.worker.company === selectedCompany;
    return isShiftMatch && isCompanyMatch;
  });

  if (loading) return <p>Loading attendance data...</p>;
  if (error) return <p>{error}</p>;
  if (!filteredRecords.length) return <p>No attendance records found for {formatDate(selectedDate)}.</p>;

  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-4">
          <CCardBody>
            <h5>Total Attendance Records on {formatDate(selectedDate)}: {filteredRecords.length}</h5>
            <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '20px' }}>
              <input
                type="date"
                value={selectedDate}
                onChange={handleDateChange}
                className="form-control"
                style={{ width: '200px', marginRight: '10px' }}
              />
              <select value={selectedShift} onChange={handleShiftChange} className="form-control" style={{ width: '150px', marginRight: '10px' }}>
                {shifts.map((shift) => (
                  <option key={shift} value={shift}>
                    {shift === 'all' ? 'All Shifts' : shift.charAt(0).toUpperCase() + shift.slice(1)}
                  </option>
                ))}
              </select>
              <select value={selectedCompany} onChange={handleCompanyChange} className="form-control" style={{ width: '200px' }}>
                {['all', ...companies].map((company) => (
                  <option key={company} value={company}>
                    {company === 'all' ? 'All Companies' : company}
                  </option>
                ))}
              </select>
            </div>

            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead className="text-nowrap">
                <CTableRow>
                  <CTableHeaderCell className="bg-body-tertiary">Name</CTableHeaderCell>
                  <CTableHeaderCell className="bg-body-tertiary">Date</CTableHeaderCell>
                  <CTableHeaderCell className="bg-body-tertiary">Shift</CTableHeaderCell>
                  <CTableHeaderCell className="bg-body-tertiary">Attendance Count on {formatDate(selectedDate)}</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                {filteredRecords.map((record) => (
                  <CTableRow key={record.worker._id + record.shift}>
                    <CTableDataCell>
                      <Link to={`/employee/${record.worker._id}`} style={{ color: 'blue', textDecoration: 'none' }}>
                        {record.worker.name}
                      </Link>
                    </CTableDataCell>
                    <CTableDataCell>{formatDate(record.createdAt)}</CTableDataCell>
                    <CTableDataCell>{record.shift}</CTableDataCell>
                    <CTableDataCell>{record.attendanceCount}</CTableDataCell>
                  </CTableRow>
                ))}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Employees;
