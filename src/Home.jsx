import { NavLink } from "react-router-dom"

export const Home = () => {
  return (
    <div>
        <div className="container">
        <h1>Home</h1>
        <button className="btn"><NavLink to='/register'>Register</NavLink></button>
        <button className="button"><NavLink to='/login'>Login</NavLink></button>
        </div>
    </div>
  )
}
