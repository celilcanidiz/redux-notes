import React from 'react'
import Card from 'react-bootstrap/Card'
import { destroy } from '../redux/notes/notesSlice'
import { useDispatch } from 'react-redux/es/exports'

function  Note({text, color, id}) {
  const dispatch = useDispatch();
  return (
    <div>
<Card style={{ width: '18rem', backgroundColor:`${color}` }}>
        <Card.Header className='header'> <button className={color === "#000000" ? 'destroy text-white' : 'destroy'} onClick={() =>dispatch(destroy(id))}>X</button></Card.Header>
        <Card.Body>
          <Card.Text className= {color === "#000000" ? 'text-white' : ''}>
            {text}
          </Card.Text>
        </Card.Body>
    </Card>
      <br />
    </div>
  ) 
} 

export default Note