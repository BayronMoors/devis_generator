import { FirebaseApp, initializeApp } from 'firebase/app';

// TODO: Replace the following with your env 
const firebaseConfig = {
    apiKey: "AIzaSyDSQdpmQDgyICXcXqIdF6JV_1TfA9RJspY",
    authDomain: "devis-generator.firebaseapp.com",
    projectId: "devis-generator",
    storageBucket: "devis-generator.appspot.com",
    messagingSenderId: "385470774141",
    appId: "1:385470774141:web:3dd8e005913d2b30c72a14"
};



export class App {
    private static app : FirebaseApp;

    public static initApp(): void{
        this.app = initializeApp(firebaseConfig);
    }

    public static getApp(): FirebaseApp {
        return this.app;
    }

    public static setSessionStorage(jwt: string) {
        window.sessionStorage.setItem('jwt', JSON.stringify(jwt))
    }

    public static getSessionStorage(value: string)  {
        const data = sessionStorage.getItem(value);
        if(data !== null) JSON.parse(data);
        else data;
    }

    public static removeSessionStorage(value: string) {
        sessionStorage.removeItem(value);
    }
}
