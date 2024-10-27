import React from 'react';
import {
  CCard,
  CCardBody,
  CCol,
  CRow,
  CListGroup,
  CListGroupItem,
  CButton,
  CBadge,
} from '@coreui/react';

const user = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  bio: 'A passionate developer.',
  skills: ['JavaScript', 'React', 'Node.js'],
  status: 'Inactive',
};

const EmployeeProfile = () => {
  return (
    <CRow className='justify-content-center container'>
      <CCol md='8' xs='12'>
        <CCard>
          <CCardBody>
            <CRow>
              <CCol md="4" className="text-center">
                <h4>{user.name}</h4>
                <p>{user.bio}</p>
                <p>
                  <strong>Email:</strong> {user.email}
                </p>
                <CBadge color={user.status === 'Active' ? 'success' : 'danger'}>
                  {user.status}
                </CBadge>
              </CCol>
              <CCol md="8">
                <CListGroup>
                  <CListGroupItem>
                    <strong>Skills:</strong>
                    <ul>
                      {user.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </CListGroupItem>
                </CListGroup>
              </CCol>
            </CRow>
            <CButton color="primary" className="mt-3">
              Edit Profile
            </CButton>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  );
};

export default EmployeeProfile;
