import React from 'react';
import { CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CButton } from '@coreui/react';

const UpdateEmployees = ({ visible, setVisible, selectedEmployee }) => {
  return (
    <CModal visible={visible} onClose={() => setVisible(false)}>
      <CModalHeader>
        <CModalTitle>Edit Employee</CModalTitle>
      </CModalHeader>
      <CModalBody>
        {/* Form to edit employee details */}
        <div>
          <p>Name: {selectedEmployee?.name}</p>
          <p>Contact: {selectedEmployee?.contact}</p>
          <p>Role: {selectedEmployee?.position}</p>
          <p>Shift: {selectedEmployee?.shift}</p>
          {/* Add form inputs here for editing */}
        </div>
      </CModalBody>
      <CModalFooter>
        <CButton color="secondary" onClick={() => setVisible(false)}>Cancel</CButton>
        <CButton color="primary">Save Changes</CButton>
      </CModalFooter>
    </CModal>
  );
};

export default UpdateEmployees;
