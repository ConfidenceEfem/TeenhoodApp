import React from 'react';
import styled from 'styled-components';
const HeroPage = ({ toggle, setToggle }) => {
  return (
    <Container>
      <Wrapper>
        <ChurchName>Assemblies of God Church</ChurchName>
        <ChurchSub>Apapa District Teens Department</ChurchSub>
        <Topic>
          <span>Presents:</span>Walking in Dominion👑👑
        </Topic>
        <ButtonHolder>
          <Question
            onClick={() => {
              setToggle(!toggle);
            }}
          >
            Ask a Question
          </Question>
          <a
            href="https://bit.ly/agteens"
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <Register>About Us</Register>
          </a>
        </ButtonHolder>
      </Wrapper>
    </Container>
  );
};

export default HeroPage;

const Topic = styled.div`
  color: white;
  align-items: center;
  margin-bottom: 50px;
  font-weight: 700;

  span {
    margin-right: 10px;
    font-weight: 450;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
`;

const ChurchSub = styled.div`
  color: white;
  font-size: 25px;
  margin-top: 5px;
  margin-bottom: 15px;
  text-align: center;
  @media screen and (max-width: 600px) {
    width: 90%;

    font-size: 20px;
  }
  @media screen and (max-width: 500px) {
    font-size: 17px;
  }
  @media screen and (max-width: 380px) {
    font-size: 15px;
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
  @media screen and (max-width: 350px) {
    font-size: 13px;
    padding: 10px 25px;
  }
`;

const Register = styled.div`
  font-size: 14px;
  padding: 12px 40px;
  color: blue;
  border: 2px solid blue;
  font-weight: 500;
  cursor: pointer;
  border-radius: 5px;
  transition: all ease-in-out 750ms;
  text-align: center;

  :hover {
    background: blue;
    color: white;
    transform: scale(1.02);
  }
  @media screen and (max-width: 350px) {
    font-size: 13px;
    padding: 10px 25px;
  }
`;

const ChurchName = styled.div`
  color: white;
  font-size: 50px;
  text-align: center;

  font-weight: 600;
  @media screen and (max-width: 600px) {
    font-size: 40px;
    width: 85%;
  }
  @media screen and (max-width: 500px) {
    font-size: 35px;
    width: 85%;
  }
  @media screen and (max-width: 380px) {
    font-size: 30px;
    width: 85%;
  }
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: calc(100vh - 90px);
`;
