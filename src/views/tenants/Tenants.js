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

const Tenants = () => {
  const [subscriptions, setSubscriptions] = useState([])
  useEffect(() => {
    fetch('http://localhost:8080/subscriptions')
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
        <CCardHeader>Tenants</CCardHeader>
        <CCardBody>
          <CTable striped>
            <CTableHead>
              <CTableRow>
                <CTableHeaderCell>Company Name</CTableHeaderCell>
                <CTableHeaderCell>Account#</CTableHeaderCell>
                <CTableHeaderCell>Status</CTableHeaderCell>

                <CTableHeaderCell>Start Date</CTableHeaderCell>
                <CTableHeaderCell>End Date</CTableHeaderCell>
                <CTableHeaderCell>Approved Date</CTableHeaderCell>
                <CTableHeaderCell>Approved By</CTableHeaderCell>
              </CTableRow>
            </CTableHead>
            <CTableBody>
              {subscriptions.map((subscription) => {
                return (
                  <CTableRow key={subscription.subscriptionID}>
                    <CTableDataCell>
                      {subscription.tenant.companyName}
                      <br />
                      <span className="small fst-itallic">{subscription.tenant.externalCode}</span>
                      <small>{subscription.createdDt}</small>
                      <small> {subscription.subscriptionPlan.planCode}</small>
                      <small>{subscription.subscriptionPlan.planDesc}</small>
                    </CTableDataCell>
                    <CTableDataCell>{subscription.acctNbr}</CTableDataCell>
                    <CTableDataCell>
                      <CBadge color="danger">{subscription.statusStr} </CBadge>
                    </CTableDataCell>

                    <CTableDataCell>{subscription.subscriptionPlan.startDt}</CTableDataCell>
                    <CTableDataCell>{subscription.subscriptionPlan.endDt}</CTableDataCell>
                    <CTableDataCell>{subscription.approvedDt}</CTableDataCell>
                    <CTableDataCell>{subscription.approvedBy}</CTableDataCell>
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

export default Tenants
