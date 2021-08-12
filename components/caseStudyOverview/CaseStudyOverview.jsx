import styles from './caseStudyOverview.module.css'

export default function CaseStudyOverview ({caseStudy}) {
  return (
    <section className={styles.projectInformation}>
      <div>
        <h1 className={styles.projecHeader}>{caseStudy.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: caseStudy.overview }}/>
      </div>
      <div className={styles.clearfix}>
        {caseStudy.deliverables ? 
          <div className={styles.deliverables}>
            <h2 className={styles.subSectionHeader}>Deliverables</h2>
            <div dangerouslySetInnerHTML={{ __html: caseStudy.deliverables }}/>
          </div>
          :
          ''
        }
        {caseStudy.descriptors ?
          <div className={styles.descriptors}>
            <h2 className={styles.subSectionHeader}>Additional Project Information</h2>
            <div dangerouslySetInnerHTML={{ __html: caseStudy.descriptors }}/>
          </div>
          :
          ''
        }
      </div>
    </section>
  );
}
