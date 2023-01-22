import { collection, DocumentData, getDocs, getFirestore, QuerySnapshot } from "firebase/firestore";
import { App } from "./FirebaseApp";

export interface IQuote {
    dateToDone: {seconds: number, nanoseconds: number},
    id: string,
    image: string,
    isDone: boolean,
    name: string,
    text:string
}


export class Db{
    private db;
    private quotes;

    constructor(){
        App.initApp();
        this.db = getFirestore();
        this.quotes = collection(this.db, 'quotes');
    }

    public async getQuotes(): Promise<IQuote[]>{
        return await getDocs(this.quotes).then((snap: QuerySnapshot<DocumentData>) => {
            const quotes: IQuote[] = []
            snap.docs.forEach((doc: any) => {
                quotes.push({...doc.data(), id: doc.id })
            })
            return quotes
        })
    }
}