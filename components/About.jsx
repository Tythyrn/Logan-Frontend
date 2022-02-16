import styled from 'styled-components'

const AboutSection = styled.section`
  max-width: 1200px;
  width: 95%;
  margin: 20px auto;

  @media screen and (min-width: 768px) {
      display: flex;
  }
`

const Profile = styled.div`
  margin: 20px;
`

const ProfilePic = styled.img`
  width: 100%;
  min-width: 320px;
`


export default function About () {
  return (
    <AboutSection>
      <Profile>
        <ProfilePic src="https://media.graphcms.com/AF6E0emLTP6HxOe4YtQ1" alt="Logan Rundquist's profile picture"/>
      </Profile>
      <div>
        <h1>About Me</h1>
        <p>Hi there! I'm a graphic and multimedia designer living in Austin, TX. I have a background in studio art, with a BA degree from Baylor University. I love being creative in many different forms of media!</p>
        <p>I've held many creative jobs since my school days in different industries, but I've settled into print and digital graphic design. Most recently, I went through School of Motion's “Design Bootcamp”, and I've been exploring design for motion graphics.</p>
        <p>Formerly Logan T. Scandling, I changed my website to reflect my new married name of Rundquist.</p>
        <p><b>Download and view my resume by clicking the image below.</b></p>
      </div>
    </AboutSection>
  );
}
