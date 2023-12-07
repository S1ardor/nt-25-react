import { useState } from 'react';
import './Header.css';

export const Header = () => {

    const [click, setClick] = useState(false);
    const btns = () => {
        setClick(!click);
        console.log('hello');
    }


  return (
    <div>
        <div className="container">
            <div className="box">
            <h1 className='h1'>Lesson-1</h1>
               <ul className='text'>
                  <li><a href="">Hoome</a></li>
                  <li><a href="">About</a></li>
                  <li><a href="">Profil</a></li>
                  <button className='login_btn'>Login</button>

                   <button className='btn'>+</button>
               </ul>
            <button onClick={btns} className='button'>+</button>
            </div>


            <button>clicked</button>
        </div>
    </div>
  )
}
