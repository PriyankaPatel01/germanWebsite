import React from 'react'
import './sub.css'

const Sub = () => {
  return (
    <div className='subheadings'>
      <div className="float-left">
        <span>Home &#8594; Livebestand &#8594;</span>
        <span> Cannabis Blüten</span>
        <h1>Blüten</h1>
      </div>
      <div className="float-right">
        <p>GKV mit Kostenübernahme</p>
        <p className="tag">Preisoptionen</p>
        <form className='search'>
        <input type="search" placeholder='suschen..'/>
    </form>
    <span>Sortieren nach</span>
    <span>Verfügbarkeit</span>
    <span>tag</span>
      </div>
    </div>
  )
}

export default Sub
