import React from 'react'

const TiltDivider = ({color}) => {
  return (
    <div className="tild-divider" style={{transform: "rotateY(180deg)"}}>
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className="shape-fill" fill={color}></path>
        </svg>
    </div>
  )
}

export default TiltDivider