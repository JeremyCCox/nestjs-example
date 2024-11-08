import Header from "./Header.tsx";
import {Outlet} from "react-router-dom";
import {ReactNode} from "react";

export default function Layout({children}:Readonly<{ children:ReactNode }>){
    return(
        <>
            <Header/>
            <main className={'min-h-[90vh] bg-amber-200'}>
                {children}
            </main>
            <footer className={'min-h-[10vh] bg-amber-200 border-t-2 border-black flex justify-evenly'}>
                <div className={'w-[40%]'}>
                    <Credits/>
                </div>
                <div className={'w-[40%]'}>
                    <Credits/>
                </div>
            </footer>
        </>
        )
}
function Credits(){
    return(
        <div className={'grid text-sm text-center'}>
            <h2 className={'text-lg text-left'}>Credits</h2>

            <a href="https://www.flaticon.com/free-icons/login" title="login icons">Login icons created by Sebastian Belalcazar - Flaticon</a>

        </div>
    )
}