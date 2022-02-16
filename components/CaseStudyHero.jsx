import styled from 'styled-components'
import Image from "@graphcms/react-image";

const HeaderImage = styled.div`
  max-height: 100vh;
  overflow: hidden;
`

export default function CaseStudyHero ({caseStudy}) {
  return (
    <HeaderImage>
      <Image image={caseStudy.heroImage[0]} maxWidth={caseStudy.heroImage[0].width} alt={caseStudy.heroImage[0].alt}/>
    </HeaderImage>
  );
}
