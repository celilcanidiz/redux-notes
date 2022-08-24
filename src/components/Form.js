import React from 'react'
import {Col, Row , Container} from 'react-bootstrap'
import Cards from './Note'
import { useSelector } from 'react-redux'
function Form() {
  const items = useSelector((state) => state.notes.items); 
  const activeFilter = useSelector((state) => state.notes.activeFilter);
  const filteredItems = items.filter((item) => item.text.toLowerCase().includes(activeFilter.toLowerCase()));
  // console.log(items);
  return (
    <div>
    <Container className='mt-4 '>
      <Row>
          {/* <Col xs xl="4" xxl='3'><Cards/></Col>
          <Col xs xl="4" xxl='3'><Cards/></Col>
          <Col xs xl="4" xxl='3'><Cards/></Col>
          <Col xs xl="4" xxl='3'><Cards/></Col>
          <Col xs xl="4" xxl='3'><Cards/></Col>
          <Col xs xl="4" xxl='3'><Cards/></Col>
          <Col xs xl="4" xxl='3'><Cards/></Col> */}

          {filteredItems.map((item)=> (
            <Col xs lg="4" xl="4"  xxl='3'key={item.id}><Cards text={item.text} color={item.color} id={item.id}/></Col>
          ))}
          
      </Row>
    </Container>
    </div>
  )
}

export default Form