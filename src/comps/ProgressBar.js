import React,{ useEffect } from 'react';
import useStorage from '../hooks/useStorage';
import {motion} from 'framer-motion';

const ProgressBar = ({file, setFile}) => {
    const {url,progress} = useStorage(file);
    console.log(progress, url)

    useEffect(()=>{
        if(url){
            setFile(null);
        }
    },[url,setFile])//in the dependency i don't see any use of setFile here. 

    return (
        <motion.div className="progress-bar" 
        initial={{width:0}}
        animate={{width:progress + "%"}}></motion.div>
    )
}

export default ProgressBar
