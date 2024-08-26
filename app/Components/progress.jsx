import React from 'react'
import './s.css'
const Progress = () => {
  return (
    <>
    {/* price range bar */}

        <h2 className='head'>Price</h2><br /><br />
        <div className="slider-container">
            <div className="price-slider">
            </div>
        </div>
    <div className="range-input">
        <input type="range" 
            className="min-range" 
            min='0' 
            max="100" 
            value="25" 
            step="1"/>
        <input type="range" 
            className="max-range" 
            min="0" 
            max="100" 
            value="85" 
            step="1"/>
    </div>
    <div className="range">
        <input type="number" className='minimum' placeholder='10'/>
        <span className='seperator'>-</span>
        <input type="number" className='maximum' placeholder='100'/>
    </div> 

    </>
  )
}

export default Progress
