import Swal from "sweetalert2"
import { LoginCredentials } from "../models/LoginCredentials"
import { SignUpCredentials } from "../models/SignUpCredentials"

export default function useForm() {
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
                title: 'Invalid e-mail or password',
                text: 'Please verify your credentials and try again.',
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
            title: 'Your passwords don\'t match!',
            text: 'Please verify and try again.'
            });
        }

        if(signupCredentials.password === confirmPassword && !validCredentials) {
            Swal.fire({
                icon: 'error',
                title: 'Invalid e-mail, password or location',
                text: 'Please verify your credentials and try again.',
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
