import Link from 'next/link';
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin-top: 20px;
  padding: 10px;
  background-color: #ff66c4;
`

const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  
  h2 {
    color: #fff;
  }
`

const CustomLink = styled(Link)`
  text-decoration: none;
`

const SubFooter = styled.div`
  width: 100%;
  text-align: center;
  margin: auto;
  color: #fff;
`

const BrandIcons = styled.div`
  margin: auto 0;
  cursor: pointer;
  font-size: 32px;

  a {
    color: #fff;
  }

  i {
    margin-left: 15px;
  }
`

export default function Footer () {
  return (
    <StyledFooter>
      <MainFooter>
        <CustomLink href="/">
            <h2>LSR Creative</h2>
        </CustomLink>
        <BrandIcons>
            <a href="https://www.linkedin.com/in/logan-rundquist-03130897/" target="_blank" rel="noopener">
                <i className="fa-brands fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/lsr.creative/" target="_blank" rel="noopener">
                <i className="fa-brands fa-instagram"></i>
            </a>
        </BrandIcons>
      </MainFooter>
      <SubFooter>
        <small>&copy; Copyright {new Date().getFullYear()}, Logan Rundquist</small>
      </SubFooter>
    </StyledFooter>
  );
}
