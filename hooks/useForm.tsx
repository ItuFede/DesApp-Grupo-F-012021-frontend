import Swal from "sweetalert2"
import { DictionaryContext } from "../contexts/DictionaryContext"
import { LoginCredentials } from "../models/LoginCredentials"
import { SignUpCredentials } from "../models/SignUpCredentials"
import { useContext } from "react"

export default function useForm() {
  const dictionaryState = useContext(DictionaryContext)

    const inputNotEmpty = (input: string) => {
        return input !== undefined && input !== null && input !== ''
      }

    const validLoginCredentials = (loginCredentials: LoginCredentials) => {
        const validCredentials = (
            inputNotEmpty(loginCredentials.username) &&
            inputNotEmpty(loginCredentials.password)
        )

        if(!validCredentials) {
            Swal.fire({
                icon: 'error',
                title: dictionaryState.dictionary.swal.loginError.title,
                text: dictionaryState.dictionary.swal.loginError.text,
            });
        }
        
        return validCredentials
    }

    const validSignupCredentials = (signupCredentials: SignUpCredentials, confirmPassword: string) => {
        const validCredentials = (
            signupCredentials.password === confirmPassword &&
            inputNotEmpty(signupCredentials.username) &&
            inputNotEmpty(signupCredentials.password) &&
            inputNotEmpty(signupCredentials.platform) 
        )

        if (signupCredentials.password !== confirmPassword) {
            Swal.fire({
            icon: 'error',
            title: dictionaryState.dictionary.swal.passwordError.title,
            text: dictionaryState.dictionary.swal.passwordError.text
            });
        }

        if(signupCredentials.password === confirmPassword && !validCredentials) {
            Swal.fire({
                icon: 'error',
                title: dictionaryState.dictionary.swal.signupError.title,
                text: dictionaryState.dictionary.swal.signupError.text,
            });
        }

        return validCredentials
    }
    
    const useInputHandler = (event, formState, formStateSetter) => {
    formStateSetter({
        ...formState,
        [event.target.name] : event.target.value
    })
    }

    return {
        validLoginCredentials,
        validSignupCredentials,
        useInputHandler
    }
}
