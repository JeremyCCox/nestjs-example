import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import Home from "./components/Home.tsx";
import Login from "./components/Login.tsx";

function App() {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<Home/>}>
                <Route path="dashboard" element={<Login />} /></Route>
        )
    );
    return (
        <>
            <RouterProvider router={router}/>
        </>
    )
}

export default App
