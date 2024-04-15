import { useEffect, useState } from "react"
import { getTeams } from "../helpers/getTeams";


export const useFetchTeams = () => { 

    const [teams, setTeam] = useState([]); 

    const getOneTeam = async() => { 
        const allTeams = await getTeams();
        setTeam(allTeams);  
    }

    useEffect( () =>{ 
        getOneTeam(); 
    }, []); 

    return { 
        teams
    }
}