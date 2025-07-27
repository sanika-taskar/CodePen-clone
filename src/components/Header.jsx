import {AppBar,Toolbar,styled} from '@mui/material';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import { useContext, useState } from 'react';
import { Dataitems } from '../store/DataProvider';

const Container=styled(AppBar)`
    background:#060606;
    height:9vh;
`

function Header(){
    const {mode,setMode}=useContext(Dataitems);

    const handleDarkChange=()=>{
        setMode(false);
    }

     const handleLightChange=()=>{
        setMode(true);
    }
    return (
        <Container position="static">
            <Toolbar>

                {mode ?<LightModeIcon onClick={handleDarkChange}/>: <DarkModeIcon onClick={handleLightChange}/>}

            </Toolbar>
        </Container>
    )
}
export default Header;
