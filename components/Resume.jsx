import styled from 'styled-components'

const StyledResume = styled.section`
  max-width: 1200px;
  width: 95%;
  margin: 20px auto;
  text-align: center;
`

const ResumeHeader = styled.h2`
  margin-top: 10px;
  margin-bottom: 10px;
`

const ResumeImg = styled.img`
  max-width: 300px;
`

export default function Resume () {
  return (
    <StyledResume>
      <ResumeHeader>Resume</ResumeHeader>
      <a href="https://media.graphcms.com/eBnaJCEHRY2itoWgHcKI" download="Logan Rundquist Resume">
        <ResumeImg src="https://media.graphcms.com/otkKYBVWRaiNco0SKjaw" alt="Logan Rundquist's resume"/>
        </a>
    </StyledResume>
  );
}
