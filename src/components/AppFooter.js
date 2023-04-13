import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>
        <span className="ms-1">
          &copy; 2023{' '}
          <a href="https://www.lucidtechinc.com/" target="_blank" rel="noopener noreferrer">
            Lucid Technolgies Inc.
          </a>
        </span>
      </div>
      <div className="ms-auto">
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
          Privacy
        </a>
        <span className="m-2">|</span>
        <a href="https://www.lucidtechinc.com/" target="_blank" rel="noopener noreferrer">
          Terms &amp; Conditions
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
