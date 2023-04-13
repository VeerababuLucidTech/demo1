import {
  CBadge,
  CCard,
  CCardBody,
  CCardHeader,
  CTable,
  CTableBody,
  CTableDataCell,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
} from '@coreui/react'
import React, { useEffect, useState } from 'react'

const Subscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/tenants')
      .then((response) => response.json())
      .then((data) => {
        setSubscriptions(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])
  return (
    <div>
      <CCard className="border-0">
        <CCardHeader>Subscriptions</CCardHeader>
        <CCardBody>
          <CTable>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Company Name</CTableHeaderCell>
                <CTableHeaderCell>External Code</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {subscriptions.map((tenant) => {
                return (
                  <CTableRow key={tenant.tenantID}>
                    <CTableDataCell>{tenant.companyName}</CTableDataCell>
                    <CTableDataCell>{tenant.externalCode}</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="danger">{tenant.statusStr} </CBadge>
                    </CTableDataCell>
                  </CTableRow>
                )
              })}
            </CTableBody>
          </CTable>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Subscriptions
