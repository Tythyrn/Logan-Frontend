import Layout from '../components/Layout';
import baguetteBox from '../lib/baguetteBox.js';
import { GetStaticProps, GetStaticPaths } from 'next';
import { GraphQLClient } from 'graphql-request';
import { GetAvailableCaseStudies } from "../data/graphql/query-available-case-studies";
import { GetCaseStudies } from "../data/graphql/query-case-studies";
import { GetNavigation } from '../data/graphql/query-navigations';
import {useEffect} from 'react'
import Head from 'next/head'
import CaseStudyHero from '../components/CaseStudyHero';
import CaseStudyOverview from '../components/CaseStudyOverview';
import CaseStudyGallery from '../components/caseStudyGallery/CaseStudyGallery';

const Page = ({ caseStudy, links }) => {

  useEffect(() => {
    baguetteBox.run('.gallery', {
      filter: /.+/i
    });
  });

  return (
    <Layout links={links}>
      <Head>
        <title>{caseStudy.metaTitle}</title>
        <meta name="description" content={caseStudy.metaDescription}/>
      </Head>
      <CaseStudyHero caseStudy={caseStudy} />
      <CaseStudyOverview caseStudy={caseStudy} />
      <CaseStudyGallery caseStudy={caseStudy} />
    </Layout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const endpoint = process.env.GRAPHQL_URL_ENDPOINT;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.MY_TOKEN,
    },
  })
  const paths = [];

  await graphQLClient
    .request(GetAvailableCaseStudies)
    .then((caseStudies) => {
      paths.push(
        ...caseStudies.caseStudies
          .filter((project) => project.slug !== null)
          .map((project) => ({
            params: {
              slug: [project.slug],
            },
          }))
      )
    })
    .catch((error) => console.error(error));

  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const endpoint = process.env.GRAPHQL_URL_ENDPOINT;

  const graphQLClient = new GraphQLClient(endpoint, {
    headers: {
      authorization: process.env.MY_TOKEN,
    },
  })


  const temp = await graphQLClient
    .request(GetCaseStudies, {'slug': params.slug[0]})
    // .then(data => JSON.parse(data))
    .catch((error) => console.error(error));

  const links = await graphQLClient
    .request(GetNavigation)
    .then(data => {return data.navigation.links})
    .catch((error) => console.error(error));

  const caseStudy = temp.caseStudies[0];
   
  return {
    props: { 
      caseStudy,
      links
    },
  };
}

export default Page;