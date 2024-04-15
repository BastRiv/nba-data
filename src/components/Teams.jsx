import { getTeams } from "../helpers/getTeams";
import { Button } from "react-bootstrap"
 
export const Teams = () => { 
    return ( 
        <>
            <Button className="mt-9 ml-9" variant="success" onClick={getTeams}>Get teams</Button>
        </>
     )

}