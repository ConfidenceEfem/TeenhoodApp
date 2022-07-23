import React from 'react';
import styled from 'styled-components';
import AskModal from './AskModal';
import Header from './Header';
import HeroPage from './HeroPage';
import img from './images/img.png';

const LandingPage = () => {
  const [toggle, setToggle] = React.useState(false);

  return (
    <Container>
      {toggle ? <AskModal toggle={toggle} setToggle={setToggle} /> : null}
      <Wrapper>
        <Header toggle={toggle} setToggle={setToggle} />
        <HeroPage toggle={toggle} setToggle={setToggle} />
      </Wrapper>
    </Container>
  );
};

export default LandingPage;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.9);
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${img});
  background-size: center;
`;
