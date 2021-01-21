import Layout from '../../components/Layout';
import processMarkdown from '../../lib/processMarkdown';
import baguetteBox from '../../lib/baguetteBox.js'
import {getAllProjects, getProjectBySlug} from '../../lib/api/motionApi';
import {useEffect} from 'react'
import Head from 'next/head'

const MotionGraphic = ({ heroImage, title, overview, deliverables, descriptors, projectImages, metaDescription  }) => {

  useEffect(() => {
    // function baguette () {
      baguetteBox.run('.gallery');
    // }

    // window.addEventListener('load', baguette); 

    // return function cleanup() {
    //   // window.removeEventListener('load', baguette);
    // };
  });

  return (
    <Layout>
      <Head>
        <title>{title}</title>
        <meta name="description" content={metaDescription}/>
      </Head>
      <div className="headerImage">
        <img src={heroImage.url} className="main-img" alt={heroImage.alt}/>
      </div>
      <section className="project-information">
        <div className="overview">
          <h1 className="project-header">{title}</h1>
          <div className="project-overview" dangerouslySetInnerHTML={{ __html: overview }}/>
        </div>
        <div className="clearfix">
          {deliverables ? 
            <div className="deliverables">
              <h2>Deliverables</h2>
              <div dangerouslySetInnerHTML={{ __html: deliverables }}/>
            </div>
            :
            ''
          }
          {descriptors ?
            <div className="descriptors">
              <h2>Descriptors</h2>
              <div dangerouslySetInnerHTML={{ __html: descriptors }}/>
            </div>
            :
            ''
          }
        </div>
        <div className="gallery">
          {projectImages.map(image => (
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
  const project = getProjectBySlug(params.slug);
  const overview = await processMarkdown(project.overview);
  const deliverables = await processMarkdown(project.deliverables);
  const descriptors = await processMarkdown(project.descriptors);
  
  return {
    props: { 
      title: project.title,
      heroImage: project.heroImage[0],
      overview,
      deliverables,
      descriptors,
      projectImages: project.imageSet,
      metaDescription: project.metaDescription
    },
    revalidate: 300,
  };
}
export default MotionGraphic;