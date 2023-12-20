import { useState , useEffect} from 'react'
import './App.css'
import Header from './Components/Header';
import Body from './Components/Body';

function App() {
  

  return(
  <>
    <div className='flex flex-col bg-black h-screen '>
        {/* <img src='bg_4.jpg' className='opacity-100 h-screen bg-contain blur-sm object-contain  w-[50%]' /> */}
        <Header/>
        <Body/>
    </div>
  
  </>)
}

export default App
