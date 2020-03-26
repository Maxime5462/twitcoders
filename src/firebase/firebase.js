import app from 'firebase/app'
import 'firebase/auth'

import firebaseConfig from './config'

class Firebase {
  constructor () {
    app.initializeApp(firebaseConfig)
    this.auth= app.auth()
    this.googleProvider = new app.auth.GoogleAuthProvider()
  }

     login = async () => {
        const { user } = this.auth.signInWithPopup(this.googleProvider)
        console.log(user)
     }

     logout = async () => await this.auth.signOut()
}

const firebase = new Firebase()
export default firebase
