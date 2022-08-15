import React from 'react';
import styled from 'styled-components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { user } from './reduxpersist/actions';
import { useNavigate } from 'react-router-dom';
import ScaleLoader from "react-spinners/ScaleLoader"

const AskModal = ({ toggle, setToggle }) => {
  const onToggle = () => {
    setToggle(!toggle);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [loading, setLoading] = React.useState(false)

  const selector = useSelector((state) => state.persistedReducer.currentTeen);

  if (selector === null) {
    console.log('hello');
  }
  const schema = yup.object().shape({
    name: yup.string().required('Please enter your Name'),
    question: yup.string().required('Please enter your question'),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({ resolver: yupResolver(schema) });

  const submit = handleSubmit(async (data) => {
    const { name, question } = data;
    

    try {
      const config = {
        headers: {
          authorization: `${selector?.token}`,
        },
      };

      const url = 'http://localhost:2019';
      const mainUrl = 'https://teenhood.herokuapp.com';
      setLoading(true)
      if (selector?.token && selector?.data?.name === name) {
        const res = await axios.post(
          `${mainUrl}/ask`,
          { name, question },
          config
        );
        if(res){
          setLoading(false)
        }
        console.log(res.data.data);
        navigate('/questions');
        onToggle();
        // window.location.reload();
      } else {
        const res1 = await axios.post(`${mainUrl}/ask`, { name, question });
        if(res1){
          setLoading(false)
        }
        dispatch(user(res1.data.data));
        navigate('/questions');
        onToggle();
        // window.location.reload();
      }
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <Container>
      <Card>
        <CardWrapper onSubmit={submit}>
          <CloseHeader>
            <Close onClick={onToggle}>x</Close>
          </CloseHeader>
          <Input
            placeholder="Enter your Name"
            {...register('name')}
            defaultValue={selector?.data?.name}
          />
          <TextArea placeholder="Ask your Question" {...register('question')} />
          <div style={{display:"flex", alignItems: "center"}}><Submit type="submit">Submit Question</Submit>
          
          {loading?<ScaleLoader color='blue' /> :null}
          </div>
        </CardWrapper>
      </Card>
    </Container>
  );
};

export default AskModal;

const Submit = styled.button`
  font-size: 12px;
  padding: 12px 30px;
  margin-top: 20px;
  color: white;
  background: blue;
  border-radius: 5px;
  font-weight: 500;
  margin-right: 15px;
  cursor: pointer;
  transition: all ease-in-out 750ms;
  cursor: pointer;
  :hover {
    transform: scale(1.02);
  }
`;
const TextArea = styled.textarea`
  padding: 5px;
  font-family: poppins;
  height: 100px;
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
  @media screen and (max-width: 600px) {
    ::placeholder {
      font-size: 12px;
    }
  }
`;
const Input = styled.input`
  padding: 5px;
  font-family: work sans;
  width: 88%;
  height: 40px;
  font-weight: 600;
  border: 2px solid black;
  outline: none;
  font-size: 14px;
  margin-top: 20px;
  :focus {
    border: 2px solid blue;
  }
  ::placeholder {
    font-size: 14px;
    font-weight: 500;
  }
  @media screen and (max-width: 600px) {
    ::placeholder {
      font-size: 12px;
    }
  }
`;
const Close = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: blue;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  font-family: poppins;
  cursor: pointer;
  transition: all 350ms;
  :hover {
    transform: scale(1.02);
  }
`;
const CloseHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
const CardWrapper = styled.form`
  display: flex;
  width: 90%;
  height: 90%;
  flex-direction: column;
  align-items: center;
`;
const Card = styled.div`
  width: 500px;
  height: 350px;
  background: white;
  border-radius: 5px;
  display: flex;
  font-family: poppins;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 600px) {
    width: 80%;
  }
`;
const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.4);
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: poppins;
  position: fixed;
  transition: 0.5s;
  z-index: 10;
`;
