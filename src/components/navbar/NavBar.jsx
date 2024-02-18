import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { fetchSearchedRes } from '../../app/slices/searchFeature/searchSlice';

const NavBar = () => {

    const [searchText, setSearchText] = useState('')
    const dispatch = useDispatch()

    return (
        <div className='container mx-auto flex justify-center bg-slate-400 fixed top-0 left-0 right-0 p-4 text-center z-[9999999]'>
            <input onChange={e => setSearchText(e.target.value)} value={searchText} className='focus-visible:outline-none px-1 rounded' type="text" maxLength={30} />
            <span onClick={() => { dispatch(fetchSearchedRes(searchText)) }} className='ml-2 px-2 rounded cursor-pointer bg-slate-500'>Search</span>
        </div>
    )
}


export default NavBar
