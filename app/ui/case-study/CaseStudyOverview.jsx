import styled from 'styled-components'

const ProjectInformation = styled.section`
  max-width: 1200px;
  width: 95%;
  margin: 0 auto;
`

const ProjectHeader = styled.h1`
  margin-top: 10px;
  margin-bottom: 10px;
`

const SubSectionHeader = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`

const SubSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`

const Details = styled.div`
  padding: 15px;
  li {
    margin-left: 1em;
    padding-bottom: 5px;
  }
`

export default function CaseStudyOverview ({caseStudy}) {
  return (
    <ProjectInformation>
      <div>
        <ProjectHeader>{caseStudy.title}</ProjectHeader>
        <div dangerouslySetInnerHTML={{ __html: caseStudy.overview.html }}/>
      </div>
      <SubSection>
        {caseStudy.deliverables ? 
          <Details>
            <SubSectionHeader>Deliverables</SubSectionHeader>
            <div dangerouslySetInnerHTML={{ __html: caseStudy.deliverables.html }}/>
          </Details>
          :
          ''
        }
        {caseStudy.descriptors ?
          <Details>
            <SubSectionHeader>Additional Project Information</SubSectionHeader>
            <div dangerouslySetInnerHTML={{ __html: caseStudy.descriptors.html }}/>
          </Details>
          :
          ''
        }
      </SubSection>
    </ProjectInformation>
  );
}
