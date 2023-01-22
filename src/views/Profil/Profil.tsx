import Layout from '../../components/Layout/Layout'
import {Outlet} from "react-router-dom"
import { Db, IQuote } from '../../services/Db';
import { useState , useEffect} from "react"

type Props = {}

export default function profil({ }: Props) {
    const db = new Db();
    const [quotes, setQuotes] = useState<IQuote[]>();

    const setQuotesFromDb = async () => {
        const quotes = await db.getQuotes();
        setQuotes(quotes);
    } 

    useEffect(() => {
        setQuotesFromDb();
    },[])

    useEffect(() => {
        console.log(quotes)
    }, [quotes])
    
    return (
        // <Layout>
        //     <Outlet />

        // </Layout>
        <div>
            { quotes  && quotes.map((quote: IQuote) => (
                <span>{quote.name}</span>
            ))}
        </div>
    )
}