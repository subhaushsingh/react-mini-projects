import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Route,createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Rgb from './components/Rbg/Rgb.jsx'
import Hex from './components/Hex/Hex';


const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element = {<Layout></Layout>}>
  <Route path='' element={<Rgb></Rgb>} />
  <Route path='hex' element={<Hex></Hex>}/>
  <Route path='*' element={<div>Not Found</div>} />
  </Route>
))





createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
