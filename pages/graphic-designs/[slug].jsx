import Layout from '../../components/Layout';
import baguetteBox from '../../lib/baguetteBox.js'
import {getAllProjects, getProjectBySlug} from '../../lib/api/graphicApi';
import {useEffect} from 'react'
import Head from 'next/head'

const GraphicDesign = ({ caseStudy }) => {

  useEffect(() => {
    baguetteBox.run('.gallery');
  });

  return (
    <Layout>
      <Head>
        <title>{caseStudy.metaTitle}</title>
        <meta name="description" content={caseStudy.metaDescription}/>
      </Head>
      <div className="headerImage">
        <img src={caseStudy.heroImage[0].url} className="main-img" alt={caseStudy.heroImage[0].alt}/>
      </div>
      <section className="project-information">
        <div className="overview">
          <h1 className="project-header">{caseStudy.title}</h1>
          <div className="project-overview" dangerouslySetInnerHTML={{ __html: caseStudy.overview }}/>
        </div>
        <div className="clearfix">
          {caseStudy.deliverables ? 
            <div className="deliverables">
              <h2>Deliverables</h2>
              <div dangerouslySetInnerHTML={{ __html: caseStudy.deliverables }}/>
            </div>
            :
            ''
          }
          {caseStudy.descriptors ?
            <div className="descriptors">
              <h2>Additional Project Information</h2>
              <div dangerouslySetInnerHTML={{ __html: caseStudy.descriptors }}/>
            </div>
            :
            ''
          }
        </div>
        {caseStudy.projects.map(project => (
          <div className="project-gallery" key={project.id}>
            {project.title ? <h1>{project.title}</h1> : ''}
            <div className="gallery">
              {project.imageSet.map(image => (
                <div className="port-image-container" key={image.id}>
                  <a href={image.url} className="port-image-links">
                      <img 
                        src={image.url}
                        alt={image.alt}
                        className="port-images"
                      />
                  </a>
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>
    </Layout>
  );
};

export async function getStaticPaths() {
  const projects = getAllProjects();
  return {
    paths: projects.map((project) => ({
      params: {
        slug: project.slug,
      },
    })),
    fallback: false,
  };
}
export async function getStaticProps({ params }) {
  const caseStudy = getProjectBySlug(params.slug);
  
  return {
    props: { 
      caseStudy,
    },
    revalidate: 300,
  };
}
export default GraphicDesign;