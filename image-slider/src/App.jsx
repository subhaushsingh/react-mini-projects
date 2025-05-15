import { useEffect, useState } from 'react'
import './App.css'

function App({url,limit}) {

  const [images,setImages] = useState([])
  const [currentSlide,setCurrentSlide] = useState(0)
  const [errorMsg,setErrorMsg] = useState(null)
  const [loading,setLoading] = useState(false);


  async function fetchImages(url) {
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();

      if(data){
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error)
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(url !== ''){
      fetchImages(url);
    }
  },[url])


  if(loading){
    return <div>Loading Data! please wait.</div>
  }

  if(errorMsg !== null){
    return <div>Error occurred! {errorMsg}</div>
  }

  return (
    <>
      <div className='container'></div>
    </>
  )
}

export default App
