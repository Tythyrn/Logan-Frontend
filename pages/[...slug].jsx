import Layout from '../components/Layout';
import baguetteBox from '../lib/baguetteBox.js'
import {getAllProjects, getProjectBySlug} from '../lib/api/slugsApi';
import {useEffect} from 'react'
import Head from 'next/head'
import CaseStudyHero from '../components/caseStudyHero/CaseStudyHero';
import CaseStudyOverview from '../components/caseStudyOverview/CaseStudyOverview';
import CaseStudyGallery from '../components/caseStudyGallery/CaseStudyGallery';

const Page = ({ caseStudy }) => {

  useEffect(() => {
    baguetteBox.run('.gallery');
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
  const projects = getAllProjects();
  const paths = [];

  paths.push(
    ...projects
      .filter((project) => project.slug !== null)
      .map((project) => ({
        params: {
          slug: [project.slug],
        },
      }))
  )

  return {
    paths,
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const caseStudy = getProjectBySlug(params.slug[0]);
   
  return {
    props: { 
      caseStudy,
    },
  };
}
export default Page;