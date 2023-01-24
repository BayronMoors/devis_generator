import { App } from "./FirebaseApp";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, User, UserCredential } from "firebase/auth";



export class Auth {
    private auth;
    private user: any;

    constructor(){
        App.initApp();
        this.auth = getAuth(App.getApp());
        this.user = null
    }

    public getAuth() {
        return this.auth;
    }

    public createUser(email: string, password: string) {
        createUserWithEmailAndPassword(this.auth, email, password ).then((cred) => {
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

    public async signIn(email: string, password: string) {
        try{
            const userCredential = await signInWithEmailAndPassword(this.auth, email, password)
            this.user = userCredential.user;
            App.setSessionStorage(this.user.accessToken!);
        }
        catch(error: any) {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            console.log(errorMessage)
        };
        
    }

    public signOut(){
        return this.auth.signOut().then(() => {
            this.user = null;
            App.removeSessionStorage('jwt')
            // console.log('sign out')
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
            console.log(errorCode);
            console.log(errorMessage)
        });
    }

    public checkStatus(){
        onAuthStateChanged(this.auth, (user: any) => {
            console.log('test',user.accessToken);
        })
    }

    public async getUser(): Promise<User | null>{
        return await this.user;
    }
}