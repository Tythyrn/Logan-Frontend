import styled from 'styled-components'

const StyledHero = styled.section`
  font-family: "Roboto Slab", serif;
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url("https://media.graphcms.com/H35xS37gSciktcHfYpN8");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    filter: brightness(80%);
  }
`

const AnimatedTitle = styled.div`
  @keyframes showTopText {
    0% {
      transform: translate3d(0, 100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes showBottomText {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  font-family: "Roboto Slab", serif;
  color: #fff;
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vw;

  & > div {
    height: 50%;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  & > div div {
    font-size: 17vw;
    padding: 2vmin 0;
    position: absolute;
  }

  & > div div span {
    display: block;
  }

  & > div.textTop {
    border-bottom: 1vmin solid #fff;
    top: 0;
  }

  & > div.textTop div {
    animation: showTopText 1s;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
    bottom: 0;
    transform: translate(0, 100%);
  }

  & > div.textBottom {
    bottom: 0;
  }

  & > div.textBottom div {
    animation: showBottomText 0.5s;
    animation-delay: 1.75s;
    animation-fill-mode: forwards;
    top: 0;
    transform: translate(0, -100%);
  }
`

const Chevron = styled.i`
  @keyframes showBottomText {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  margin-top: auto;
  color: #fff;
  font-size: 60px;
  z-index: 5;
  opacity: 0;
  animation: fadeIn 0.5s, showBottomText 0.5s;
  animation-delay: 2.5s;
  animation-fill-mode: forwards;
  transform: translate(0, -100%);

  @media screen and (min-width: 768px) {
    font-size: 100px;
  }
`

export default function Hero () {
  return (
    <StyledHero>
      <AnimatedTitle>
        <div className="textTop">
          <div>
            <span>LSR</span>
          </div>
        </div>
        <div className="textBottom">
          <div>CREATIVE</div>
        </div>
      </AnimatedTitle>
      <Chevron className="fa-solid fa-chevron-down"></Chevron>
    </StyledHero>
  );
}
