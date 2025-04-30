import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'
import { ThemeProvider } from './contexts/theme'

function App() {

  const [themeMode,setThemeMode] = useState('light');

  const darkTheme = ()=>{
    setThemeMode('dark');
  }

  const lightTheme = ()=>{
    setThemeMode('light');
  }

  useEffect(()=>{
    document.querySelector('html').classList.remove('dark','light');
    document.querySelector('html').classList.add('themeMode')
  },[lightTheme])

  return (
    <ThemeProvider value={{themeMode,darkTheme,lightTheme}}>
      <div className='h-screen flex flex-col items-center justify-center space-y-4'>
      <div className="flex flex-col items-end mb-4 max-w-sm mx-auto w-full">
        <ThemeBtn  />
      </div>
      <div>
        <Card />
      </div>
      </div>
    </ThemeProvider>
  )
}

export default App
