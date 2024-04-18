import { Route, Routes } from 'react-router-dom';
import { Menu } from '../Menu/Menu'; 
import { Home } from '../News/Home';
import { Teams } from '../Teams/Teams';

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