import { useEffect, useState } from 'react'
import './App.css'

function App({url,page=1,limit=5}) {

  const [images,setImages] = useState([])
  const [currentSlide,setCurrentSlide] = useState(0)
  const [errorMsg,setErrorMsg] = useState(null)
  const [loading,setLoading] = useState(false);


  async function fetchImages(getUrl) {
    try {
      setLoading(true);
      console.log(`${getUrl}?page=${page}&limit=${limit}`)
      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      
      const data = await response.json();

      if(data){
        setImages(data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error.message)
      setErrorMsg(error.message);
      setLoading(false);
    }
  }

  useEffect(()=>{
    if(url !== ''){
      fetchImages(url);
    }
  },[url])

  console.log(images);

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
