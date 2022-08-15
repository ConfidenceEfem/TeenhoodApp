import React from 'react';
import styled from 'styled-components';

const SiderBar = ({ showBar, setShowBar, toggle, setToggle, onToggle }) => {
  //   const onToggle = () => {
  //     setToggle(!toggle);
  //   };
  return (
    <Container>
      <SideCard>
        <SideCardWrapper>
          <CloseHeader>
            <Close
              onClick={() => {
                setShowBar(!showBar);
              }}
            >
              x
            </Close>
          </CloseHeader>
          <Reigster
            onClick={() => {
              setShowBar(!showBar);
              onToggle();
            }}
          >
            Ask A Question
          </Reigster>
          <a
            href="https://bit.ly/agteens"
            target="_blank"
            style={{
              width: '100%',
              textDecoration: 'none',
            }}
          >
            <Reigster
              onClick={() => {
                setShowBar(!showBar);
              }}
            >
             About Us
            </Reigster>
          </a>

          <Push></Push>
          <Text>All the Gospel</Text>
        </SideCardWrapper>
      </SideCard>
    </Container>
  );
};

export default SiderBar;

const Text = styled.div`
  font-size: 14px;
  color: white;
`;
const Push = styled.div`
  display: flex;
  flex: 1;
`;
const Reigster = styled.div`
  font-size: 14px;
  width: 100%;
  height: 45px;
  display: flex;
  align-items: center;
  text-decoration: none;
  justify-content: center;
  /* padding: 12px 70px; */
  color: blue;
  background: white;
  border-radius: 5px;
  font-weight: 500;
  margin: 15px 0;
  transition: all ease-in-out 750ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;

const Close = styled.div`
  color: white;
  font-weight: 600;
  font-size: 25px;
  cursor: pointer;
`;
const CloseHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 20px;
`;
const SideCardWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;
const SideCard = styled.div`
  width: 320px;
  height: 100%;
  background: blue;
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  display: none;
  @media screen and (max-width: 800px) {
    display: flex;
    width: 100%;
    height: 450px;
    position: absolute;
    top: 78px;
    transition: 0.5s;
  }
`;
