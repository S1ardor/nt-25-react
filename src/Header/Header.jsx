import { useContext } from 'react';
import './Header.css';
import { Context } from '../context/Context';

export const Header = () => {
const {click, setClick} = useContext(Context)


  return (
    <div>
        <div className="container">
            <div className="box">
            <h1 className='h1'>Lesson-1</h1>
               <ul className='text' style={{transform: `translateX(${click ? "0": "120% "})`}}>
                  <li><a href="">Hoome</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Profil</a></li>
                  <button className='login_btn'>Login</button>

                   <button className='btn' onClick={() => setClick(false)}>+</button>
               </ul>
            <button onClick={() => setClick(true)} className='button'>+</button>
            </div>


            <button>clicked</button>
        </div>
    </div>
  )
}
