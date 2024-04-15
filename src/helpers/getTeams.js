
export const getTeams = async () => {

    const url = 'https://api-nba-v1.p.rapidapi.com/teams';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '03fb1b1a38mshb8748e9c1758759p140d87jsn86969fb34b65',
            'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'
        }
    };
    
    const resp = await fetch( url, options ); 
    const { response } = await resp.json(); 
    console.log(response)
    const teams = response.map( team => ({
        name: team.name,
        nickname: team.nickname,
        logo: team.logo,
        city: team.city,
        id: team.id
    }));
    console.log(teams);
    return teams; 

}