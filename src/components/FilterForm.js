import React from 'react'
import { useDispatch } from 'react-redux';
import { search } from '../redux/notes/notesSlice'
function FilterForm() {
  const dispatch =useDispatch();
  return (
    <div>
        <input type="text" className='searcharea' placeholder='Search...' onChange={(e) => dispatch(search(e.target.value))}/>
    </div>
  )
}

export default FilterForm