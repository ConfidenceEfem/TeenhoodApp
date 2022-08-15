import React from 'react';
import styled from 'styled-components';
import img from './images/img.png';
import axios from 'axios';
import { useSelector } from 'react-redux';
import MyProfile from './MyProfile';

const QuestionMainScreen = () => {
  const [toggle, setToggle] = React.useState(true);

  const selector = useSelector((state) => state.persistedReducer.currentTeen);

  const [data, setData] = React.useState([]);
  const [userData, setUserData] = React.useState([]);
  const [question, setQuestion] = React.useState("")

  const updateToggle = async (id,toggle) => {
    const url = 'http://localhost:2019';
    const mainUrl = 'https://teenhood.herokuapp.com';
    await axios.post(`${mainUrl}/question/toggle/${id}`, {toggle: !toggle});
    window.location.reload();
  };
  const EditQuestion = async (id) => {
    const url = 'http://localhost:2019';
    const mainUrl = 'https://teenhood.herokuapp.com';
    await axios.post(`${mainUrl}/question/edit/${id}`, {question});
    window.location.reload();
  };
  const deleteQuestion = async (id) => {
    const url = 'http://localhost:2019';
    const mainUrl = 'https://teenhood.herokuapp.com';
    await axios.post(`${mainUrl}/question/${id}`);
    window.location.reload();
  };
  const fetchData = async () => {
    const url = 'http://localhost:2019';
    const mainUrl = 'https://teenhood.herokuapp.com';
    const res = await axios.get(`${mainUrl}/allquestion`);
    console.log(res.data.data);
    setData(res.data.data);
  };
  const fetchUserData = async () => {
    const url = 'http://localhost:2019';
    const mainUrl = 'https://teenhood.herokuapp.com';
    const res = await axios.get(`${mainUrl}/alluser`);
    setUserData(res.data.data);
  };

  React.useEffect(() => {
    fetchData();
    fetchUserData();
  }, []);

  return (
    <Container>
      <Wrapper>
        <QuestionComp>
          <QuestionCompWrapper>
            {data.map((props) => (
              <QuestionCard>
                <MyProfile user={props?.user} date={props?.createdAt}/>
                <QuestionText>{props?.question}</QuestionText>
                {selector?.data?._id === props?.user ? (
                  <ButtonHolder>
                    <DeleteButton
                      onClick={() => {
                        deleteQuestion(props?._id);
                      }}
                    >
                      Delete
                    </DeleteButton>
                    <EditButton 
                    onClick={()=>{
                      updateToggle(props?._id, props?.toggle)
                    }}
                    >Edit Question</EditButton>
                  </ButtonHolder>
                ) : null}
                
                {props?.toggle ? (
                  <EditAndButton>
                    <Input
                  
                      placeholder="Update Your Question" value={question}
                defaultValue={props?.question}
               
                onChange={(e)=>{
                  setQuestion(e.target.value)
                }}
                
                    />
                    <UpdateButton
                      onClick={()=>{
                        EditQuestion(props?._id)
                        updateToggle(props?._id, props?.toggle)
                      }}>Update Question</UpdateButton>
                  </EditAndButton>
                ) : null}
              </QuestionCard>
            ))}
          </QuestionCompWrapper>
        </QuestionComp>
        <PartiComp>
          <Image src={img} />
          <Participant>Participants</Participant>
          <RegisterCards>
            <RegisterWrapper>
              {userData?.map((props) => (
                <Card>
                  <Icon>{props?.name?.charAt(0)}</Icon>
                  <Name>{props?.name}</Name>
                </Card>
              ))}
            </RegisterWrapper>
          </RegisterCards>
        </PartiComp>
      </Wrapper>
    </Container>
  );
};

export default QuestionMainScreen;

const UpdateButton = styled.div`
width: 35%;
  height: 50px;
  font-size: 14px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  background: blue;
  border-radius: 5px;
  font-weight: 500;
  /* margin-right: 15px; */
  transition: all ease-in-out 750ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
  @media screen and (max-width: 600px) {
    width: 45%;
    font-size: 13px;
  }
  @media screen and (max-width: 400px) {
    font-size: 11px;
  }
`;
const Input = styled.textarea`
  padding: 5px;
  font-family: poppins;
  height: 80px;
  margin-top: 20px;
  width: 88%;
  font-weight: 500;
  border: 2px solid black;
  outline: none;
  font-size: 14px;
  resize: none;
  :focus {
    border: 2px solid blue;
  }
  ::placeholder {
    font-size: 14px;
    font-weight: 500;
  }
`;
const EditAndButton = styled.div`
  margin-top: 15px;
  width: 85%;
  @media screen and (max-width: 550px) {
    width: 100%;
  }
`;
const ButtonHolder = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  margin-left: 100px;
  margin-top: 30px;
  font-size: 13px;
  @media screen and (max-width: 550px) {
    margin-left: 0px;
  }
  @media screen and (max-width: 400px) {
    font-size: 11px;
  }
`;
const DeleteButton = styled.div`
  padding: 8px 40px;
  color: red;
  border: 2px solid red;
  font-weight: 500;
  margin-right: 10px;
  cursor: pointer;
  border-radius: 5px;
  transition: all ease-in-out 750ms;
  :hover {
    background: red;
    color: white;
    transform: scale(1.02);
  }
`;

const EditButton = styled.div`
  margin-right: 15px;
  padding: 8px 40px;
  color: blue;
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
  @media screen and (max-width: 400px) {
    padding: 8px 30px;
  }
`;
const QuestionText = styled.div`
  margin-left: 50px;
  display: flex;
  flex-wrap: wrap;
  // background-color: red;
  font-size: 15px;
  justify-content: flex-start;

  @media screen and (max-width: 550px) {
    margin-left: 0px;
  }
`;

const Time = styled.div`
  font-size: 10px;
  color: blue;
  font-weight: 600;
  display: flex;
  align-items: center;
  margin-top: 3px;
`;

const NameAndTime = styled.div`
  display: flex;
  margin-left: 15px;
  height: 100%;
  align-items: flex-start;
  flex-direction: column;
`;
const ProfileAndName = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 5px;
`;
const QuestionCard = styled.div`
  display: flex;
  flex-direction: column;
  // align-items: center;
  padding-bottom: 35px;
  border-bottom: 1px solid lightgray;
  margin-bottom: 20px;

  height: auto;
  /* background-color: red; */
`;
const QuestionCompWrapper = styled.div`
  width: 90%;
  height: 90%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* background: red; */
`;
const Participant = styled.div`
  font-size: 14px;
  width: 90%;
  display: flex;
  justify-content: flex-start;
  color: gray;
  margin-bottom: 20px;
`;
const Name = styled.div`
  font-size: 13px;
  font-weight: 500;
  margin-left: 15px;
`;
const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  background-color: blue;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;
const Card = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding-bottom: 10px;
  margin-bottom: 10px;
  justify-content: flex-start;
  height: 50px;
  width: 100%;
`;
const RegisterWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`;
const RegisterCards = styled.div`
  width: 100%;
  /* height: 100%; */
  display: flex;
  justify-content: center;
`;
const Image = styled.img`
  width: 100%;
  height: 300px;
  object-fit: cover;
  margin-bottom: 15px;
`;
const PartiComp = styled.div`
  width: 27%;
  box-shadow: 1px 1px 1px 1px lightgray;
  display: flex;
  flex-direction: column;
  height: auto;
  align-items: center;
  padding-bottom: 20px;
  @media screen and (max-width: 1200px) {
    display: none;
  }
`;
const QuestionComp = styled.div`
  width: 65%;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 1px 1px lightgray;
  padding-bottom: 30px;
  @media screen and (max-width: 1200px) {
    width: 100%;
  }
  @media screen and (max-width: 550px) {
    width: 100%;
    justify-content: center;
    box-shadow: none;
  }
`;
const Wrapper = styled.div`
  width: 90%;
  display: flex;
  justify-content: center;
  height: auto;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;
  @media screen and (max-width: 550px) {
    width: 100%;
    margin-top: 15px;
  }
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  height: 100%;
  background-color: #fafcff;
`;
