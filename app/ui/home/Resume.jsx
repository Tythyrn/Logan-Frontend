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
      <a href="https://media.graphassets.com/l4afexmMQbCUCUgWMjSk?_gl=1*1guk5j4*_ga*MTQwOTU5NzE0MS4xNjU0MTE4NTQ4*_ga_G6FYGSYGZ4*MTY1NDI2NTA1Mi4zLjEuMTY1NDI3NDE0MC43" download="Logan Rundquist Resume" target={'_blank'}>
        <ResumeImg src="https://media.graphassets.com/hOjVzciXTB6KPDC1T6yI?_gl=1*a7kxgq*_ga*MTQwOTU5NzE0MS4xNjU0MTE4NTQ4*_ga_G6FYGSYGZ4*MTY1NDI2NTA1Mi4zLjEuMTY1NDI3NDE0MC43" alt="Logan Rundquist's resume"/>
        </a>
    </StyledResume>
  );
}
