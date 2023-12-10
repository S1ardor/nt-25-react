import { useContext, useEffect } from 'react'
import './App.css'

import { Context } from './context' 
import { Header } from './Header'
import { Character } from './Ricky'
function App() {
  const {click, setClick} = useContext(Context)
  useEffect(() => {
    console.log(click ? "ishladi": "close" );
  },[click])
  return (
    <>
    <Header/>
    <Character/>
    </>
  )
}

export default App
