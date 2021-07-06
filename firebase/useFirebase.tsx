import { environment }  from '../environments/environment'
import fb from "firebase/app"
import 'firebase/firestore';

export default function useFirebase() {
    const firebase = !fb.apps.length ? fb.initializeApp(environment.FIREBASE) : fb.app()
    
    return firebase
}
