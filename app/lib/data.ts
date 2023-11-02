import { Navigation } from "./types";

export async function getNavigation () {
    try{
        const headers = {
            'content-type': 'application/json',
            'Authorization': `Bearer ${process.env.MY_TOKEN}`,
        };
    
        const requestBody = {
            query: `query {
                        navigation(where: {id: "ckz5xo800ckxa0d78uun1u4va"}) {
                            links,
                            id
                        }
                    }`
        };
    
        const options = {
            method: 'POST',
            headers,
            body: JSON.stringify(requestBody),
            next: {revalidate: 1800}
        }
    
        const response = await (await fetch('https://api-us-east-1.hygraph.com/v2/cksapeiye2qs901wchlnj2m8z/master', options)).json();

        return response.data.navigation.links as Navigation;
    } 
    catch (err) {
        console.error("Error fetching navigation links", err);
    }
    
}