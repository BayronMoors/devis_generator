import Layout from '../../components/Layout/Layout'
import {Outlet} from "react-router-dom"
import { Auth } from '../../services/Authentification'

type Props = {}

export default function profil({ }: Props) {

    const auth: Auth = new Auth();

    // console.log(auth.getAuth());
    
    // auth.createUser("bayronmoors@gmail.com", "ZZee55@test")
    auth.signIn("bayronmoor@gmail.com", "ZZee55@tes")
    // auth.signOut();
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}