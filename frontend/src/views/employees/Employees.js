import React from 'react';
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

const Employees = () => {
  return (
    <CRow>
      <CCol xs>
        <CCard className="mb-5">
          <CCardBody>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
              <h5>Attendance records on 26-10-2024 : 5</h5>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <input
                  type="date"
                  className="form-control"
                  style={{ width: '150px', marginRight: '10px' }}
                />
                <select className="form-control" style={{ width: '100px' }}>
                  <option>All Shift</option>
                  <option>Day</option>
                  <option>Night</option>
                </select>
              </div>
            </div>

            <CTable align="middle" className="mb-0 border" hover responsive>
              <CTableHead className="text-nowrap">
                <CTableRow>
                  <CTableHeaderCell className="bg-body-tertiary">Name</CTableHeaderCell>
                  <CTableHeaderCell className="bg-body-tertiary">Date</CTableHeaderCell>
                  <CTableHeaderCell className="bg-body-tertiary">Shift</CTableHeaderCell>
                  <CTableHeaderCell className="bg-body-tertiary">Point</CTableHeaderCell>
                  <CTableHeaderCell className="bg-body-tertiary">Attendance</CTableHeaderCell>
                </CTableRow>
              </CTableHead>
              <CTableBody>
                <CTableRow>
                  <CTableDataCell>
                    <Link to='/employeeprofile' style={{ color: 'blue', textDecoration: 'none' }}>
                      John Doe
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell>26-10-2024</CTableDataCell>
                  <CTableDataCell>Night</CTableDataCell>
                  <CTableDataCell>Cake filling</CTableDataCell>
                  <CTableDataCell>1</CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableDataCell>
                    <Link style={{ color: 'blue', textDecoration: 'none' }}>
                      Jack
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell>26-10-2024</CTableDataCell>
                  <CTableDataCell>Night</CTableDataCell>
                  <CTableDataCell>Chhilka</CTableDataCell>
                  <CTableDataCell>1</CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableDataCell>
                    <Link style={{ color: 'blue', textDecoration: 'none' }}>
                      Evan
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell>26-10-2024</CTableDataCell>
                  <CTableDataCell>Day</CTableDataCell>
                  <CTableDataCell>Cake fitting</CTableDataCell>
                  <CTableDataCell>1</CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableDataCell>
                    <Link style={{ color: 'blue', textDecoration: 'none' }}>
                      Anaya
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell>26-10-2024</CTableDataCell>
                  <CTableDataCell>Day</CTableDataCell>
                  <CTableDataCell>Veg pro-filing</CTableDataCell>
                  <CTableDataCell>1</CTableDataCell>
                </CTableRow>

                <CTableRow>
                  <CTableDataCell>
                    <Link style={{ color: 'blue', textDecoration: 'none' }}>
                      Chris
                    </Link>
                  </CTableDataCell>
                  <CTableDataCell>26-10-2024</CTableDataCell>
                  <CTableDataCell>Night</CTableDataCell>
                  <CTableDataCell>Cake filling</CTableDataCell>
                  <CTableDataCell>1</CTableDataCell>
                </CTableRow>
                {/* Other rows... */}
              </CTableBody>
            </CTable>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default Employees;
