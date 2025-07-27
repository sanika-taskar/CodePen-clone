import { useContext, useEffect, useState } from "react";
import { Dataitems } from "../store/DataProvider";
import { Box ,styled} from "@mui/material";

const Container=styled(Box)`
    height:41vh;
`

const Result=()=>{
    const {html,css,JavaScript} =useContext(Dataitems);
    const [src,setsrc]=useState('');

    useEffect(()=>{
        const timeOut=setTimeout(()=>{
            setsrc(srcCode);
        },1000)

        return ()=>clearTimeout(timeOut)

    },[html,css,JavaScript])

    const srcCode=`
    <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${JavaScript}</script>
    </html>
    `
    
    return<>
    <Container>
        <iframe srcDoc={src}
            title="output"
            sandbox="allow-scripts"
            frameBorder={0}
            width='100%'
            height='100%'
        ></iframe>
    </Container>

    </>
}

export default Result;