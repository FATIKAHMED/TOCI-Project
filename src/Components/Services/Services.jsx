import React from 'react'
import Technicians from '../techlist/techlist'
import "./Services.css"




function Services() {
    return (
        <>
            <div className='h-[100vh] bg-slate-800 p-5 flex justify-center items-center'>
                <div className=' flex justify-start gap-[50px] w-[60vw] flex-wrap card-container'>
                    <div className='borders w-[100px] h-[80px] box ' onClick={Technicians }>
                        <p className='text-center' >CARPENTER</p>
                    </div>
                    <div className='borders w-[100px] h-[80px] box'>
                        <p className='text-center' >ELECTRICIAN</p>
                    </div>
                    
        
       
                   
                </div>
            </div>
        </>
    )
}

export default Services
