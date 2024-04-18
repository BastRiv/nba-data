import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';

export const NewsCarrusel = ({ title, content, description, url, img, date, id }) => { 
    
    return( 

        
        <>
          <Image className="w-full" style={{height:'500px'}}  src={img}/>
          <Carousel.Caption>
            <h3 className='text-2xl font-bold text-center bg-gray-400 bg-opacity-20'>{title}</h3>
          </Carousel.Caption>
        </>

     )
}