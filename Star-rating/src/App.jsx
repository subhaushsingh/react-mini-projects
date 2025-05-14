import { use, useState } from 'react'
import './App.css'
import { FaStar } from 'react-icons/fa'

function App({noOfStars=5}) {
 const [rating,SetRating] = useState(0);
 const [hoverStar, SetHoverStar] = useState(0);


 function handleClick(currentIndex){
    SetRating(currentIndex)
 }

 function handleMouseEnter(currentIndex){
  SetHoverStar(currentIndex)
 }

 function handleMouseLeave(currentIndex){
  SetHoverStar(rating)
 }

  return (
    <>
      <div className='container'>
        {
        [...Array(noOfStars)].map((_,i)=>{
          i=i+1;

            return <FaStar 
              key={i}
              onClick={()=>{handleClick(i)}}
              onMouseEnter={()=>{handleMouseEnter(i)}}
              onMouseLeave={()=>{handleMouseLeave(i)}}
              size={40}
              className={i <= (hoverStar||rating) ? 'star' : 'inactive'}
            />
        })
        }
      </div>
    </>
  )
}

export default App
