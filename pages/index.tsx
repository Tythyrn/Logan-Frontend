import { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import Hero from '../components/hero/Hero'
import About from '../components/About'
import Resume from '../components/Resume'
import { GetNavigation } from '../data/graphql/query-navigations';
import { GraphQLClient } from 'graphql-request';
import Head from 'next/head'

export default function Home({links}) {
  return (
    <Layout links={links}>
      <Head>
        <title>LSR Creative</title>
        <meta name="description" content="Portfolio site of Logan Scandling Rundquist"/>
      </Head>
      <Hero />
      <About />
      <Resume />
    </Layout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const endpoint = process.env.GRAPHQL_URL_ENDPOINT;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.MY_TOKEN,
    },
  })

  const links = await graphQLClient
    .request(GetNavigation)
    .then(data => {return data.navigation.links})
    .catch((error) => console.error(error));
   
  return {
    props: {
      links
    },
  };
}