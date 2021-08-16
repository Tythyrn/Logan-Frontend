import styles from './caseStudyHero.module.css'
import Image from "@graphcms/react-image";

export default function CaseStudyHero ({caseStudy}) {
  return (
    <div className={styles.headerImage}>
      <Image image={caseStudy.heroImage[0]} maxWidth={caseStudy.heroImage[0].width} />
      {/* <img 
        className={styles.mainImg}
        src={caseStudy.heroImage[0].url}
        srcSet={`${caseStudy.heroImage[0].url} 320w, ${caseStudy.heroImage[1].url} 800w, ${caseStudy.heroImage[2].url} 1200w, ${caseStudy.heroImage[3].url} 1920w`}
        alt={caseStudy.heroImage[0].alt}
      /> */}
    </div>
  );
}
