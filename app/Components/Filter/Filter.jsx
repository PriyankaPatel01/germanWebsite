import React from 'react'
import './Filter.css'
import Progress from '../progress'


const Filter = () => {
  return (
    <div className='filter'>
        <p className='fil'>Filter</p>
        <Progress/>
        <hr />
        <h2>Hersteller</h2><br /><br />
        <div className='check'>
            <label htmlFor="ADREXpharma"><input type="checkbox" /> ADREXpharma</label>
            <label htmlFor="Aurora"><input type="checkbox"/> Aurora</label>
            <label htmlFor="Avaay"><input type="checkbox"/> Avaay</label>
            <label htmlFor="Bedrocan"><input type="checkbox"/> Bedrocan</label>
            <label htmlFor="Cannamedical"><input type="checkbox"/> Cannamedical</label>
        </div>
        <p>mehr anzeigen</p>
        <hr />
        <Progress/>
        <hr />
        <Progress/>
        <hr />
        <h2>Genetik</h2><br /><br />
        <div className='spanner'>
            <span className='item1'>Indica</span>
            <span className='item2'>Sativa</span>
            <span className='item2'>Hybrid</span>
        </div>

        <hr />
        <h2>Bestrahltung</h2><br /><br />
        <div className='spanner'>
            <span className='item1'>bestrahlt</span>
            <span className='item2'>nicht bestrahlt</span>
        </div>
        <hr />
        <h2>Terpene</h2><br />
        <hr />
        <p>alle Filter zurücksetzen</p>
    </div>
  )
}

export default Filter
