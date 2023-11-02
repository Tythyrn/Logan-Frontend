import { Metadata } from "next";

import { GetStaticProps } from 'next';
import Layout from './ui/home/Layout';
import Hero from './ui/home/Hero'
import About from './ui/home/About'
import Resume from './ui/home/Resume'
import { GetNavigation } from '../data/graphql/query-navigations';
import { GraphQLClient } from 'graphql-request';
import Head from 'next/head'

export const metadata: Metadata = {
    title: "LSR Creative",
    description: "Portfolio site of Logan Scandling Rundquist",
}

async function getNavigation () {
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

        return response.data.navigation.links;
    } 
    catch (err) {
        console.error("Error fetching navigation links", err);
    }
    
}

export default async function Page() {
    const links = await getNavigation();
    console.log(links)

    return (
        <div>
            <h1>Test</h1>
            {/* <Layout links={links}>
                <Hero />
                <About />
                <Resume />
            </Layout> */}
        </div>
    );
}

// export const getStaticProps: GetStaticProps = async () => {
//   const endpoint = process.env.GRAPHQL_URL_ENDPOINT;

//   const graphQLClient = new GraphQLClient(endpoint, {
//     headers: {
//       authorization: process.env.MY_TOKEN,
//     },
//   })

//   const links = await graphQLClient
//     .request(GetNavigation)
//     .then(data => {return data.navigation.links})
//     .catch((error) => console.error(error));
   
//   return {
//     props: {
//       links
//     },
//     revalidate: 1800,
//   };
// }