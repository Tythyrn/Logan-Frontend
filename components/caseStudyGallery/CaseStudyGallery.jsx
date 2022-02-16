import styles from './caseStudyGallery.module.css'
import styled, {css} from 'styled-components'
import Image from "@graphcms/react-image";

const ProjectGallery = styled.section`
  text-align: center;
  max-width: 1200px;
  width: 95%;
  margin: 50px auto;
`

const Gallery = styled.div`
  margin: 0 auto;
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-auto-rows: 300px;
  grid-gap: 15px;
`

const StyledImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 1;
  transition: opacity 0.2s ease-in;

  ${props => css`

    &:hover {
      opacity: 0.6;
      transition: opacity 0.2s ease-in;
    }
  `}
`

export default function CaseStudyGallery ({caseStudy}) {

  return (
    <ProjectGallery>
      {caseStudy.projects.map(project => (
        <div key={project.id}>
          {project.title ? <h1>{project.title}</h1> : ''}
          <Gallery className='gallery'>
            {project.imageSet.map(image => (
                <a href={image.url} data-caption={image.caption ? image.caption : ''} key={image.id} >
                  <StyledImage image={image} maxWidth={image.width} outerWrapperClassName={styles.imagesOuterWrapper} alt={image.alt}/>
                    {/* <img 
                      src={image.url}
                      alt={image.alt}
                      className={styles.images}
                    /> */}
                </a>
            ))}
          </Gallery>
        </div>
      ))}
    </ProjectGallery>
  );
}
