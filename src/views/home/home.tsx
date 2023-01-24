import Layout from '../../components/Layout/Layout'
import {Outlet} from "react-router-dom"
import { Auth, IUser } from '../../services/Authentification'
import { useEffect, useState } from 'react';

type Props = {}

export default function profil({ }: Props) {

    // auth.signOut();
    return (
        <Layout>
            <Outlet />
        </Layout>
    )
}