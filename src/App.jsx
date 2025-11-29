import { Outlet } from 'react-router-dom';
import Canvas from './Canvas';

import './App.css'
import Example1 from './Example1';

function App() {


  return (
    <>
     

            <Canvas> 
              <Example1 />  
            </Canvas> 
            <Outlet />
    </>
  )
}

export default App
