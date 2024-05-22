/* eslint-disable react/prop-types */

import { useState } from "react"
import { Input } from './Input'
import {
    emailValidationMessage,
    validateEmail,
    validatePasswordMessage,
    validateUsername,
    validateUsernameMessage,
    validateConfirPassword,
    validatePassword,
    passwordConfirmationMessage,
    validateName,
    nameValidationMessage,
    lastNameValidationMessage,
    validateLastName
} from '../shared/validators'
import { useRegister } from '../shared/hooks'
import { useNavigate } from "react-router-dom"
import './Register.css'

export const Register = ({ switchAuthHandler }) => {
    const { register, isLoading } = useRegister()
    const navigate = useNavigate();

    const [formState, setFormState] = useState({
        name: {
            value: '',
            isValid: false,
            showError: false
        },
        lastName: {
            value: '',
            isValid: false,
            showError: false
        },
        username: {
            value: '',
            isValid: false,
            showError: false,
        },
        email: {
            value: '',
            isValid: false,
            showError: false
        },
        password: {
            value: '',
            isValid: false,
            showError: false,
        },
        passwordConfir: {
            value: '',
            isValid: false,
            showError: false,
        },

    })

    const handleInputValueChange = (value, field) => {
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                value
            }
        }))
    }

    const handleInputValidationOnBlur = (value, field) => {
        let isValid = false
        switch (field) {
            case 'name':
                isValid = validateName(value)
                break
            case 'lastName':
                isValid = validateLastName(value)
                break
            case 'username':
                isValid = validateUsername(value)
                break
            case 'email':
                isValid = validateEmail(value)
                break
            case 'password':
                isValid = validatePassword(value)
                break
            case 'passwordConfir':
                isValid = validateConfirPassword(formState.password.value, value)
                break
            default:
                break
        }
        setFormState((prevState) => ({
            ...prevState,
            [field]: {
                ...prevState[field],
                isValid,
                showError: !isValid
            }
        }))
    }

    const handleRegister = async (event) => {
        event.preventDefault();

        try {
            await register(
                formState.name.value,
                formState.lastName.value,
                formState.username.value,
                formState.email.value,
                formState.password.value
            );
            navigate('/auth');
            switchAuthHandler();
        } catch (error) {

            console.error("Error during registration:", error);
        }
    };

    const isSubmitButtonDisabled = isLoading ||
        !formState.name.isValid ||
        !formState.lastName.isValid ||
        !formState.username.isValid ||
        !formState.email.isValid ||
        !formState.password.isValid ||
        !formState.passwordConfir.isValid;

    /* return (
         <div className="container">
             <div className="header">
                 <div className="text">Sign Up</div>
                 <div className="underline"></div>
             </div>
             <form>
                 <div className="inputs">
                     <div className="input">
                         <img src={userIcon} alt="User Icon" />
                         <Input
                             className="input-field"
                             field='name'
 
                             value={formState.name.value}
                             onChangeHandler={handleInputValueChange}
                             type='text'
                             onBlurHandler={handleInputValidationOnBlur}
                             showErrorMessage={formState.name.showError}
                             validationMessage={nameValidationMessage}
                             placeholder={"Name"}
                         />
                     </div>
                 </div>
                 <div className="inputs">
                     <div className="input">
                         <img src={userIcon} alt="User Icon" />
                         <Input
                             className="input-field"
                             field='lastName'
 
                             value={formState.lastName.value}
                             onChangeHandler={handleInputValueChange}
                             type='text'
                             onBlurHandler={handleInputValidationOnBlur}
                             showErrorMessage={formState.lastName.showError}
                             validationMessage={lastNameValidationMessage}
                             placeholder={"LastName"}
                         />
                     </div>
                 </div>
                 <div className="inputs">
                     <div className="input">
                         <img src={userIcon} alt="User Icon" />
                         <Input
                             className="input-field"
                             field='username'
 
                             value={formState.username.value}
                             onChangeHandler={handleInputValueChange}
                             type='text'
                             onBlurHandler={handleInputValidationOnBlur}
                             showErrorMessage={formState.username.showError}
                             validationMessage={validateUsernameMessage}
                             placeholder={"Username"}
                         />
                     </div>
                 </div>
                 <div className="inputs">
                     <div className="input">
                         <img src={emailIcon} alt="Email Icon" />
                         <Input
                             className="input-field"
                             field='email'
 
                             value={formState.email.value}
                             onChangeHandler={handleInputValueChange}
                             type='email'
                             onBlurHandler={handleInputValidationOnBlur}
                             showErrorMessage={formState.email.showError}
                             validationMessage={emailValidationMessage}
                             placeholder={"Email"}
                         />
                     </div>
                 </div>
                 <div className="inputs">
                     <div className="input">
                         <img src={passwordIcon} alt="Password Icon" />
                         <Input
                             className="input-field"
                             field='password'
 
                             value={formState.password.value}
                             onChangeHandler={handleInputValueChange}
                             type='password'
                             onBlurHandler={handleInputValidationOnBlur}
                             showErrorMessage={formState.password.showError}
                             validationMessage={validatePasswordMessage}
                             placeholder={"Password"}
                         />
                     </div>
                 </div>
                 <div className="inputs">
                     <div className="input">
                         <img src={passwordIcon} alt="Password Icon" />
                         <Input
                             className="input-field"
                             field='passwordConfir'
                             value={formState.passwordConfir.value}
                             onChangeHandler={handleInputValueChange}
                             type='password'
                             onBlurHandler={handleInputValidationOnBlur}
                             showErrorMessage={formState.passwordConfir.showError}
                             validationMessage={passwordConfirmationMessage}
                             placeholder={"ConfirmPassword"}
                         />
                     </div>
                 </div>
                 <div className="submit-container">
                     <button className="submit" onClick={handleRegister} disabled={isSubmitButtonDisabled}>
                         Sign Up
                     </button>
                     <span className="submit" onClick={switchAuthHandler}>
                         <a href="/auth">Login</a>
                     </span>
                 </div>
             </form>
         </div>
 
     )*/
    return (
        <>
            <style>
                {`
              .register_img_section {
                background: linear-gradient(rgba(2,2,2,.7),rgba(0,0,0,.7)),
                            url(https://images.unsplash.com/photo-1606046604972-77cc76aee944?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D) center center;
              }
            `}
            </style>
            <div className="h-screen flex" id="containerRegister">
                <div className="flex w-full lg:w-1/2 justify-center items-center bg-white space-y-8">
                    <div className="w-full px-8 md:px-32 lg:px-24">
                        <form className="bg-white rounded-md shadow-2xl p-5">
                            <h1 className="text-gray-800 font-bold text-2xl mb-1">Register</h1>
                            <p className="text-sm font-normal text-gray-600 mb-8">Create a new account</p>
                            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='name'

                                    value={formState.name.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='text'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.name.showError}
                                    validationMessage={nameValidationMessage}
                                    placeholder={"Name"}
                                />
                            </div>
                            <div className="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='lastName'
                                    value={formState.lastName.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='text'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.lastName.showError}
                                    validationMessage={lastNameValidationMessage}
                                    placeholder={"Apellido"}
                                />                            </div>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='username'

                                    value={formState.username.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='text'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.username.showError}
                                    validationMessage={validateUsernameMessage}
                                    placeholder={"Username"}
                                />                            </div>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='email'

                                    value={formState.email.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='email'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.email.showError}
                                    validationMessage={emailValidationMessage}
                                    placeholder={"Email"}
                                />                            </div><div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='password'

                                    value={formState.password.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='password'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.password.showError}
                                    validationMessage={validatePasswordMessage}
                                    placeholder={"Password"}
                                />                            </div>
                            <div className="flex items-center border-2 mb-12 py-2 px-3 rounded-2xl ">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                                </svg>
                                <Input
                                    className="input-field"
                                    field='passwordConfir'
                                    value={formState.passwordConfir.value}
                                    onChangeHandler={handleInputValueChange}
                                    type='password'
                                    onBlurHandler={handleInputValidationOnBlur}
                                    showErrorMessage={formState.passwordConfir.showError}
                                    validationMessage={passwordConfirmationMessage}
                                    placeholder={"ConfirmPassword"}
                                />                            </div>
                            <button type="submit" className="block w-full bg-indigo-600 mt-5 py-2 rounded-2xl hover:bg-indigo-700 hover:-translate-y-1 transition-all duration-500 text-white font-semibold mb-2"
                                onClick={handleRegister} disabled={isSubmitButtonDisabled}>Register</button>
                            <div className="flex justify-between mt-4">
                                <a href="/">
                                    <span className="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all">Regresar a pagina principal</span>
                                </a>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="hidden lg:flex w-full lg:w-1/2 register_img_section justify-around items-center">
                    <div className="bg-black opacity-20 inset-0 z-0" />
                    <div className="w-full mx-auto px-20 flex-col items-center space-y-6">
                        <h1 className="text-white font-bold text-4xl font-sans">Registrate</h1>
                        <p className="text-white mt-1">Proyecto grupo7</p>
                        <div className="flex justify-center lg:justify-start mt-6">
                            <a href="/auth" onClick={switchAuthHandler} className="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 mt-4 px-4 py-2 rounded-2xl font-bold mb-2">Login</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
