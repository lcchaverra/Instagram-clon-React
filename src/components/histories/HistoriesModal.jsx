import React from 'react'

const HistoriesModal = ({children}) => {
  return (
    <>
    <div className="History-Modal-container">
      <div className="History-Modal">
        <div className="History-Modal-content-grid">
            <div className="History-Modal-content-item">
              {children}
            </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default HistoriesModal