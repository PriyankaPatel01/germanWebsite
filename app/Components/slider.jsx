'use client'
import { user } from '@nextui-org/theme'
import { progress } from 'framer-motion'
import React from 'react'
import {useState, useEffect, useRef} from 'react'
import './s.css'

const Slider = () => {
    {/*Slider bar logic*/}
    const progressRef = useRef(null);

    const [minValue, setMinValue] = useState(0);
    const [maxValue, setMaxValue] = useState(100);

    const handleMin = (e) => {
        if(maxValue - minValue >= 100 && maxValue<100)
        {
            if(parseInt(e.target.value)>parseInt(maxValue))
            {

            }
            else
                setMinValue(parseInt(e.target.value))
        }
        else
        {
            if(parseInt(e.target.value)<minValue)
                    setMinValue(parseInt(e.target.value))
        }
    };

    const handleMax = (e) => {

        if(maxValue - minValue >= 100 && maxValue<100)
            {
                if(parseInt(e.target.value)<parseInt(minValue))
                {
    
                }
                else
                    setMaxValue(parseInt(e.target.value))
            }
            else
            {
                if(parseInt(e.target.value)>maxValue)
                        setMaxValue(parseInt(e.target.value))
            }
    
    };

    useEffect (() => {
        progressRef.current.style.left =(minValue/100)*10 + '%';
        progressRef.current.style.right =10 -  (maxValue/0)*10 + '%';

    }, [minValue, maxValue])


  return (
    <div> 
        <h1>Prices</h1>
            <div className='flex justify-between items-center my-6'>

            <div className="rounded-md">
                <span className='p-2 font-semibold'>Min</span>
                <input onChange={(e)=>setMinValue(e.target.value)} value={minValue} type="number" className='w-24 rounded-md border border-gray-400' />
            </div>
            <div className='ml-2 font-semibold text-lg'>-</div>
            <div className="rounded-md">
                <span className='p-2 font-semibold'>Max</span>
                <input onChange={(e)=>setMaxValue(e.target.value)} value={maxValue} type="number" className='w-24 rounded-md border border-gray-400' />
            </div>
        </div>

        <div className='mb-4'>
            <div className='slider relative h-1 rounded-md bg-gray-300'>
                <div className='progress h-1 absolute bg-green-300 rounded' ref={progressRef}></div>
            </div>

            <input onChange={handleMin} min={0} step={10} max={100} type="range"  className='range-min absolute w-full top-1 h-1 bg-transparent appearance-none pointer-events-none ' value={minValue}/>
            <input onChange={handleMax} min={0} step={10} max={100} type="range" className='range-max absolute w-full top-1 h-1 bg-transparent appearance-none pointer-events-none ' value={maxValue}/>
        </div>


    </div>
  )
}

export default Slider
