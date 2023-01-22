import { App } from "./FirebaseApp";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";

export class Auth {
    private auth;

    constructor(){
        App.initApp();
        this.auth = getAuth(App.getApp());
    }

    public getAuth() {
        return this.auth;
    }

    public createUser(email: string, password: string) {
        createUserWithEmailAndPassword(this.auth, email, password ).then((cred) => {
            console.log(cred.user);
            return cred.user;
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            console.log(errorMessage)
        });
    }

    public signIn(email: string, password: string) {
        signInWithEmailAndPassword(this.auth, email, password).then((cred) => {
            console.log(cred)
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            console.log(errorMessage)
        });
    }

    public signOut(){
        return this.auth.signOut().then(() => {
            console.log('sign out')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            console.log(errorMessage)
        });
    }
}