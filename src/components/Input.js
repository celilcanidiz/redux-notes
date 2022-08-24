import {useState} from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch } from 'react-redux';
import { addNote } from '../redux/notes/notesSlice';
import { nanoid } from '@reduxjs/toolkit/';

function Input() {

  const [text,setText] = useState('');
  const [color,setColor]= useState('#000000')

  const dispatch =useDispatch();
  
  const handleClick = (e) => {
if (!text) {
      alert("Notu bos bırakmayınız!!");
      return;
}
    dispatch(addNote({ id:nanoid(), text:text, color: color }))
    console.log(text);
    console.log(color);
    setText("");
  }
  return (
    <div>
        <form style={{backgroundColor:'white', display:'inline-block', borderRadius:10}}>
        <textarea className='inputarea' value={text} onChange={(e) => setText(e.target.value)}></textarea> <br />
        <div style={{marginBottom:10,display:'flex',justifyContent:'space-around'}}>
        
        <input type="color" value={color} onChange={(e) => setColor(e.target.value)}/>        
        <Button variant="success" size="sm" onClick={handleClick}>Add</Button>
        </div>
        
        </form>
    </div>
  )
}

export default Input