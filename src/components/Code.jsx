import { Box,styled } from "@mui/material";
import Editor from "./Editor";
import { useContext, useEffect } from "react";
import { Dataitems } from "../store/DataProvider";

const Container=styled(Box)`
    display:flex;
    background:#000;
    height:53vh;
`
const Code=()=>{

    const {html,setHtml,css,setCss,JavaScript,setJavaScript}=useContext(Dataitems);

    const handleHtml=()=>{
        setHtml("");
    }

    const handleCss=()=>{
        setCss("");
    }

    const handleJs=()=>{
        setJavaScript("");
    }
    const {mode}=useContext(Dataitems);


    return <Container>
        <Editor heading="HTML" icons="/" color='red'value={html} onChange={setHtml} handleRestart={handleHtml}/>
        <Editor heading="CSS" icons="*" color='rgba(6, 189, 245, 1)' value={css} onChange={setCss}
        handleRestart={handleCss}/>
        <Editor heading="JavaScript" icons="{}" color='yellow' value={JavaScript} onChange={setJavaScript}
        handleRestart={handleJs}/>
    </Container>
}

export default Code;