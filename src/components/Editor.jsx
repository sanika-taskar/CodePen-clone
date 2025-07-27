import {Box,styled} from '@mui/material';
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import {Controlled as ControlledEditor} from "react-codemirror2";

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';
import 'codemirror/mode/xml/xml';
import 'codemirror/mode/javascript/javascript';
import 'codemirror/mode/css/css';
import '../App.css';
import { useContext, useEffect, useRef, useState } from 'react';
import { Dataitems } from '../store/DataProvider';
import 'codemirror/theme/material.css'; 
import 'codemirror/theme/eclipse.css'; 
import RestartAltIcon from '@mui/icons-material/RestartAlt';

const Container=styled(Box)`
    padding:0px 8px 8px ;
    display:flex;
    flex-grow:1;
    flex-basic:0;
    flex-direction:column;
`

const Heading=styled(Box)`
    display:flex;
    background : #1d1e22;
    color:white;
    padding:9px 12px;
    gap:5px;

`;

const Header=styled(Box)`
    display:flex;
    color:#AAAEBC;
    background:#060606;
    justify-content:space-between;
    font-weight:500;
`


const Editor=({heading,icons,color,value,onChange,handleRestart})=>{
     const {html,setHtml,css,setCss,JavaScript,setJavaScript}=useContext(Dataitems);

    const [open,setOpen]=useState(true);
    const {mode,setMode}=useContext(Dataitems);
    const divRef = useRef();

    const handleChange=(editor,data,value)=>{
        onChange(value);
    }

    useEffect(() => {
    
      divRef.current.style.background = mode ? '#1d1e22' : 'white';
    
  }, [mode]);


    return<>
    <Container style={ open ? null:{flexGrow:0}}>
        <Header>
            <Heading>
                <Box component="span" style={{background:color,height:15,width:15,display:'flex',alignItems:'center',justifyContent:'center',borderRadius:5,padding:3,margin:2,backgroundColor:color,color:'#000'}}>
                    {icons}
                </Box>
                {heading}
            </Heading>


            <div style={{display:'flex', gap:5}}>

            <CloseFullscreenIcon fontSize='small' style={{alignSelf:'center'}} onClick={()=>setOpen(prevState => !prevState)}/>

            <RestartAltIcon fontSize='small' style={{alignSelf:'center'}} onClick={handleRestart}/>

            </div>

        </Header>

        <div className='my-editor' ref={divRef}>
        <ControlledEditor className='controlled-editor'
        key={mode ? 'dark' : 'light'}
        value={value} onBeforeChange={handleChange}
            options={{theme:mode?'material':'eclipse',
                lineNumbers:true,
            }}
         
        ></ControlledEditor>
        </div>

    </Container>
    </>
}

export default Editor;