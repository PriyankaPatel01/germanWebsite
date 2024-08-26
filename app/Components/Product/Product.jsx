import React from 'react'
import './product.css'

const Products = () => {
  return (
    <section className='product'>
        <div className='image'>
        <img src="bottle-img.webp" alt="bottle" />
        </div>
        <div className='text'>
        <span className='tag-1'>Canify</span><br />
        <p className='thc'>THC 18%</p> 
        <p className='cbd'>CBD 1%</p> <br /><br />
        <p className='p-name'>Cannabis Flos 22/1 PT Ku.Pink Kush DAB Canify</p>
        <br />
        <p  className='left' >Kultivar</p>
        <p className='right'>Pink Kush</p><br />
        <p className='left'>Genetik</p>
        <p className='right'>Hybrid</p><br />
        <h2>€11,66</h2>
        <p className='in_den'>in den Warenikorb</p>
        </div>
        


    </section>

  )
}

export default Products
