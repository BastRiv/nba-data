import { Card, Button } from "react-bootstrap"


export const TeamCard = ({name, nickname, logo, city,}) => { 
    return ( 
        <>
            <Card className="w-44 h-44 m-2">
                <Card.Img variant="top" src={logo} className="h-36 mx-auto my-auto mt-4"/>
                <Card.Body className="text-center">
                    <Card.Title className="h-14">{name}</Card.Title>
                    <Button>More info</Button>
                </Card.Body>
            </Card>
        </>
     )
}