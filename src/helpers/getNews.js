//API KEY newsAPI 87a242e6919f4fcd8fbc51d5751ed6f6


export const getNews = async () => { 
    const url = 'https://newsapi.org/v2/top-headlines?q=nba&category=sports&apiKey=87a242e6919f4fcd8fbc51d5751ed6f6&language=en';    
    const resp = await fetch( url ); 
    const  {articles}  = await resp.json(); 

    const news = articles.map( oneNew =>({ 
        title: oneNew.title,
        content: oneNew.content,
        description: oneNew.description,
        url: oneNew.url,
        img: oneNew.urlToImage,
        date: oneNew.publishedAt,
        id: oneNew.publishedAt,
    }) )
    console.log(news);
    return news;
}




