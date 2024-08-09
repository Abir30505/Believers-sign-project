import React from 'react'
import './lastnav.css'

function Lastnav({section}) {
  return (
    <div>
         <div className="home-content">
        <div className="last-nav d-flex align-items-center gap-1 mx-3">
          <p>Home</p>
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
          <p>Category</p>
          <i className="fas fa-chevron-right"></i>
          <i className="fas fa-chevron-right"></i>
          <p>{section}</p>
        </div>
      </div>
    </div>
  )
}

export default Lastnav