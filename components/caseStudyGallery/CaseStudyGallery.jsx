import styles from './caseStudyGallery.module.css'

export default function CaseStudyGallery ({caseStudy}) {

  return (
    <section className={styles.projectGallery}>
      {caseStudy.projects.map(project => (
        <div key={project.id}>
          {project.title ? <h1>{project.title}</h1> : ''}
          <div className={`gallery ${styles.gallery}`}>
            {project.imageSet.map(image => (
              <div key={image.id}>
                <a href={image.url} data-caption={image.caption ? image.caption : ''}>
                    <img 
                      src={image.url}
                      alt={image.alt}
                      className={styles.images}
                    />
                </a>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
