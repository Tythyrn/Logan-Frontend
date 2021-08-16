import Layout from '../components/Layout';
import baguetteBox from '../lib/baguetteBox.js'
import { GraphQLClient } from 'graphql-request';
import { GetAvailableCaseStudies } from "../data/graphql/query-available-case-studies";
import { GetCaseStudies } from "../data/graphql/query-case-studies";
import {useEffect} from 'react'
import Head from 'next/head'
import CaseStudyHero from '../components/caseStudyHero/CaseStudyHero';
import CaseStudyOverview from '../components/caseStudyOverview/CaseStudyOverview';
import CaseStudyGallery from '../components/caseStudyGallery/CaseStudyGallery';

const Page = ({ caseStudy }) => {

  useEffect(() => {
    baguetteBox.run('.gallery', {
      filter: /.+/i
    });
  });

  return (
    <Layout>
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

export async function getStaticPaths() {
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
export async function getStaticProps({ params }) {
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

  const caseStudy = temp.caseStudies[0];
   
  return {
    props: { 
      caseStudy,
    },
  };
}
export default Page;