import './App.css';
import { Register } from './Register';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Login } from './Login';
import { About } from './About';
import { TheEndRegister } from './TheEndRegister';

function App() {

  const isLoggedin = localStorage.getItem('email') && localStorage.getItem('password');

  return (
    <>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/theendregister' element={<TheEndRegister/>}/>
      {isLoggedin ? <Route path='/about' element={<About/>}/> : <Route path='/about' element={<Navigate to='/login'/>}/>}
    </Routes>
    </>
  )
}

export default App
