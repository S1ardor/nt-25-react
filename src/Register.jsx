import { NavLink } from "react-router-dom";
import { useRegister } from "./useRegister";

export const Register = () => {

    const { firstName, lastName, email, password, confirmPassword, error, handleSubmit, handleFirstNameChange, handleLastNameChange, handleEmailChange, hendlePasswordChange, hendleConfirmPasswordChange } = useRegister();

  return (
    <>
    <form onSubmit={handleSubmit}>

        <input type="text" placeholder="FirstName" onChange={handleFirstNameChange} value={firstName}/>
        {error.firstName && <p>{error.firstName}</p>}
        <input type="text" placeholder="LastName" onChange={handleLastNameChange} value={lastName}/>
        {error.lastName && <p>{error.lastName}</p>}
        <input type="email" placeholder="@Email.com" onChange={handleEmailChange} value={email}/>
        {error.email && <p>{error.email}</p>}
        <input type="password" placeholder="Password" onChange={hendlePasswordChange} value={password}/>
        {error.password && <p>{error.password}</p>}
        <input type="password" placeholder="Repeat Password" onChange={hendleConfirmPasswordChange} value={confirmPassword}/>
        {error.confirmPassword && <p>{error.confirmPassword}</p>}
        <button type="submit"><NavLink to='/theendregister'>Register</NavLink></button>

    </form>
    </>
  )
}
