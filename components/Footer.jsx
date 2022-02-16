import Link from 'next/link';
import styled from 'styled-components'
import { useState } from 'react';

const StyledFooter = styled.footer`
  margin-top: 20px;
  padding: 10px;
  background-color: #ff66c4;
`

const MainFooter = styled.div`
  display: flex;
  justify-content: space-between;
  
  h2 {
    color: #fff;
  }
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
  font-size: 24px;

  a {
    color: #fff;
  }

  i {
    margin-left: 15px;
  }
`

export default function Footer () {

  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  return (
    <StyledFooter>
      <MainFooter>
        <Link href="/">
            <h2>LSR Creative</h2>
        </Link>
        <BrandIcons>
            <a href="https://www.linkedin.com/in/logan-rundquist-03130897/" target="_blank" rel="noopener">
                <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="https://www.instagram.com/lsr.creative/" target="_blank" rel="noopener">
                <i className="fab fa-instagram"></i>
            </a>
        </BrandIcons>
      </MainFooter>
      <SubFooter>
        <small>&copy; Copyright {currentYear}, Logan Rundquist</small>
      </SubFooter>
    </StyledFooter>
  );
}
