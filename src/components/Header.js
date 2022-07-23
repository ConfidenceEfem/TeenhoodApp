import React from 'react';
import styled from 'styled-components';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import SiderBar from './SiderBar';
import logo from './images/logo.png';

const Header = ({ toggle, setToggle }) => {
  const [showBar, setShowBar] = React.useState(false);
  const onToggle = () => {
    setToggle(!toggle);
  };

  return (
    <Container>
      <Wrapper>
        <Logo src={logo} />
        <RightNavs>
          <Question onClick={onToggle}>Ask a Question</Question>
          <a
            href="https://bit.ly/teenhoodinandout"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Register>Register</Register>
          </a>
        </RightNavs>
        <Icon
          onClick={() => {
            setShowBar(!showBar);
          }}
        >
          <AiOutlineMenu />
        </Icon>
      </Wrapper>{' '}
      {showBar ? (
        <SiderBar
          showBar={showBar}
          setShowBar={setShowBar}
          toggle={toggle}
          onToggle={onToggle}
        />
      ) : null}
    </Container>
  );
};

export default Header;

const Icon = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    font-size: 30px;
    color: blue;
    cursor: pointer;
  }
`;
const Question = styled.div`
  font-size: 14px;
  padding: 12px 30px;
  color: white;
  background: blue;
  border-radius: 5px;
  font-weight: 500;
  margin-right: 15px;
  transition: all ease-in-out 750ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;

const Register = styled.div`
  font-size: 14px;
  padding: 12px 40px;
  color: blue;
  /* text-decoration: none; */
  border: 2px solid blue;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  transition: all ease-in-out 750ms;
  :hover {
    background: blue;
    color: white;
    transform: scale(1.02);
  }
`;
const RightNavs = styled.div`
  display: flex;
  align-items: center;
  @media screen and (max-width: 800px) {
    display: none;
  }
`;
const Logo = styled.img`
  width: 150px;
  height: 50px;
  object-fit: contain;
`;
const Wrapper = styled.div`
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 550px) {
    width: 90%;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 90px;
  position: relative;

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 1px lightgray;
`;
