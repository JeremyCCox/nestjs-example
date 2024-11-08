import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./pageComponents/Home.tsx";
import Login from "./pageComponents/Login.tsx";
import Dashboard from "./components/Dashboard.tsx";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route path="/" element={<Home/>}>
                    <Route path={'dashboard'} element={<Dashboard/>}/>
                </Route>
                <Route path="/login" element={<Login />} />
            </>
        )
    );
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
