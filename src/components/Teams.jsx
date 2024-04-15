import { Button, Row, Col} from "react-bootstrap"
import { useFetchTeams } from './../hooks/useFetchTeams.js'
import { TeamCard } from "./TeamCard.jsx";
 
export const Teams = () => { 
    const { teams }  = useFetchTeams();
    
    return ( 
        <>
            <Row xs={1} className="g-4">
                <Col>
                    { 
                        teams.map( (team) => (
                            <TeamCard
                                key={team.id}
                                {...team}
                            />
                        ))
                    }
                </Col>
            </Row>
        </>
    )

}