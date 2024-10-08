import React from 'react'

const TriangleDivider = ({color}) => {
  return (
    <div className="value-proposition-divider-top">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 0L0 0 598.97 114.72 1200 0z" className="shape-fill" fill={color}></path>
        </svg>
    </div>
  )
}

export default TriangleDivider