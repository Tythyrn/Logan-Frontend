import styles from './caseStudyGallery.module.css'
import Image from "@graphcms/react-image";

export default function CaseStudyGallery ({caseStudy}) {

  return (
    <section className={styles.projectGallery}>
      {caseStudy.projects.map(project => (
        <div key={project.id}>
          {project.title ? <h1>{project.title}</h1> : ''}
          <div className={`gallery ${styles.gallery}`}>
            {project.imageSet.map(image => (
                <a href={image.url} data-caption={image.caption ? image.caption : ''} key={image.id}>
                  <Image image={image} maxWidth={image.width} outerWrapperClassName={styles.imagesOuterWrapper} className={styles.imagesInnerWrapper}/>
                    {/* <img 
                      src={image.url}
                      alt={image.alt}
                      className={styles.images}
                    /> */}
                </a>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
