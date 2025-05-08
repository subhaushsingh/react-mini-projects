import React, { useState } from 'react'
import data from './data.js'


function Accordion() {

  const [selected,setSelected] = useState(null);


  function handleSingleSelection(getCurrentId){
    setSelected(getCurrentId ===  selected ? null : getCurrentId);
  }

  return (
    <>
      <div className='wrapper'>
        <div className='accordion'>          
          {
            data && data.length > 0
             ?  (
              data.map((dataItem)=>(
                <div className='item'>
                  <div className='title' onClick={()=>{handleSingleSelection(dataItem.id)}}>
                    <h3>{dataItem.question}</h3>
                    <span>+</span>
                  </div>
                  {
                    selected === dataItem.id ? 
                    <div className='content'>{dataItem.answer}</div>
                    : null
                  }
                </div>
              ))
              )
             :  (<div>No Data Found!</div>)
          }
        </div>
      </div>
    </>
  )
}

export default Accordion