import { NavLink } from "react-router-dom";
import { useRegister } from "./useRegister"

export const Login = () => {

    const { email, password, hendlePasswordChange, handleEmailChange, handleSubmit, error } = useRegister();

  return (

    <div>
        <div className="container">
        <form onSubmit={handleSubmit}>

<input type="email" placeholder="@email.com" onChange={handleEmailChange} value={email}/>
{error.email && <p>{error.email}</p>}
<input type="password" placeholder="Password" onChange={hendlePasswordChange} value={password}/>
{error.password && <p>{error.password}</p>}
<button className="btn"><NavLink to='/register'>Log in</NavLink></button>

</form>
        </div>
    </div>

  )
}
