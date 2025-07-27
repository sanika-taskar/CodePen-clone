import { createContext, useState } from "react";

export const Dataitems=createContext([]);

const DataProvider=({children})=>{

    const [html,setHtml]=useState("");
    const [css,setCss]=useState("");
    const [JavaScript,setJavaScript]=useState("");
    const [mode,setMode]=useState(true);

    return (
        <Dataitems.Provider value={{html,setHtml,css,setCss,JavaScript,setJavaScript,mode,setMode}}>
            {children}
        </Dataitems.Provider>
    );
}

export default DataProvider;