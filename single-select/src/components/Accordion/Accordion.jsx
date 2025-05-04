import React, { useState } from 'react'
import data from './data.js'

function Accordion() {

  const [selected,setSelected] = useState(null);

  return (
    <>
      <div className='wrapper'>
        <div className='accordion'>          
          {
            data && data.length > 0
             ?  (<div>
              
            </div>)
             :  (<div>No Data Found!</div>)
          }
        </div>
      </div>
    </>
  )
}

export default Accordion