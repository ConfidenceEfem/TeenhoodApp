import React from 'react';
import styled from 'styled-components';
import AskModal from './AskModal';
import Header from './Header';
import QuestionMainScreen from './QuestionMainScreen';

const QuestionsScreen = () => {
  const [toggle, setToggle] = React.useState(false);
  return (
    <Container>
      {toggle ? <AskModal toggle={toggle} setToggle={setToggle} /> : null}
      <Wrapper>
        <Header toggle={toggle} setToggle={setToggle} />
        <QuestionMainScreen />
      </Wrapper>
    </Container>
  );
};

export default QuestionsScreen;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;
