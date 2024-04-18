import { useEffect, useState } from "react"
import { getNews } from "../helpers/getNews";


export const useFetchNews = () => { 
    
    const [ news, setNews ] = useState([]); 
    const getOneNew = async() => { 
        const allNews = await getNews(); 
        setNews(allNews); 
    }

    useEffect(()=>{ 
        getOneNew();
    },[])
    
    return { 
        news
    }
}