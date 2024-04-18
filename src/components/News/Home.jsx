import { NewsCarrusel } from './NewsCarrusel';
import { useFetchNews } from '../../hooks/useFetchNews'; 
import { Carousel } from 'react-bootstrap';


export const Home = () => { 
    const { news } = useFetchNews(); 

    return (
        <>
            <h1 className="mt-9 ml-16 text-4xl font-bold">
                Noticias
            </h1>
            <Carousel fade className='h-full w-4/5 m-auto'> 
  
                {
                news.map(( oneNew ) => (
                    <Carousel.Item key={oneNew.id}>                    
                    <NewsCarrusel {...oneNew}/>
                    </Carousel.Item>
                ))
            }
    
            </Carousel>
         

        </>

)
}