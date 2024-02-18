import React from 'react'

const Loader = ({ onClick }) => {
    return (
        <div className='h-[100vh] w-[100vw] flex items-center justify-center'>
            <button className='absolute top-[20%] text-xl font-semibold' onClick={onClick}>GET THE LATEST NEWS</button>
            <div className='w-20 h-20 rounded-full bg-amber-300 animate-ping'></div>
        </div>
    )
}

export default Loader
