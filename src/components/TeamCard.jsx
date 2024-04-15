import { Card, Button } from "react-bootstrap"


export const TeamCard = ({name, nickname, logo, city,}) => { 
    return ( 
        <>
            <Card className="w-44 h-44 d-inline-block m-2">
            <div className="h-44 object-cover">
                <Card.Img variant="top" src={logo} className="h-36 mx-auto my-auto mt-4"/>
            </div>
                <Card.Body className="text-center">
                    <Card.Title className="h-14">{name}</Card.Title>
                    <Button>More info</Button>
                </Card.Body>
            </Card>
        </>
     )
}