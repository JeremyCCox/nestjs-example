import Layout from "../components/Layout.tsx"
import {Outlet} from "react-router-dom";
export default function Home(){

    return(
        <Layout>
            <Outlet/>
        </Layout>
    )
}