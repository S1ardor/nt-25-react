import { useState } from "react"

export const useRegister = () => {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setemail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });


    const validateEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email)
    }

    const validatePassword = (password) => {
        return password.length >= 6
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        let formValid = true;

        const updateError = {
            firstName: firstName ? '' : 'FirstName is required',
            lastName: lastName ? '' : 'LastName is required',
            email: validateEmail(email) ? '' : 'Invalid email address',
            password: validatePassword(password) ? '' : 'Kamida 6 ta son kriting',
            confirmPassword: password === confirmPassword ? '' : 'Password mos kelmadi'
        };

        Object.keys(updateError).forEach((key) => {
            if(updateError[key]) {
                formValid = false;
            }
        });

        if(!formValid) {
            setError(updateError);
            return;
        }

        localStorage.setItem('password', password);
        localStorage.setItem('email', email);
        localStorage.setItem('firstName', firstName);
        localStorage.setItem('lastName', lastName);
        localStorage.setItem('confirmPassword', confirmPassword);

        console.log('submitted');

    }





  return {
    firstName, lastName, email, password, confirmPassword, error, handleFirstNameChange: (event) => {
        setFirstName(event.target.value);
        setError({...error, firstName: '' });
    },
    handleLastNameChange: (event) => {
        setLastName(event.target.value);
        setError({...error, lastName: '' });
    },
    handleEmailChange: (event) => {
        setemail(event.target.value);
        setError({...error, email: '' });
    },
    hendlePasswordChange: (event) => {
        setPassword(event.target.value);
        setError({...error, password: '' });
    },
    hendleConfirmPasswordChange: (event) => {
        setConfirmPassword(event.target.value);
        setError({...error, confirmPassword: '' });
    },
    handleSubmit


  }
}
