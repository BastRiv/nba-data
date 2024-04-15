import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from "./components/Home"
import { Teams } from "./components/Teams"
import { Menu } from "./components/Menu"

export const Navigation = () => { 

    return ( 
        <>
        <Menu/>
        <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/teams" element={<Teams/>}></Route>
        </Routes>
        </> 
     )

}