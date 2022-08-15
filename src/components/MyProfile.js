import axios from 'axios';
import React from 'react';
import styled from 'styled-components';
import moment from 'moment';

const MyProfile = ({ user,date }) => {
  const [data, setData] = React.useState([]);

  const fetchData = async () => {
    const url = 'http://localhost:2019';
    const mainUrl = 'https://teenhood.herokuapp.com';
    const res = await axios.get(`${mainUrl}/user/${user}`);
    console.log(res.data.data);
    setData(res.data.data);
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <ProfileAndName>
      <Icon>{data?.name?.charAt(0)}</Icon>
      <NameAndTime>
        <Name style={{ marginLeft: '0px' }}>{data?.name}</Name>
        <Time>{moment(date).fromNow()}</Time>
      </NameAndTime>
    </ProfileAndName>
  );
};

export default MyProfile;

const Name = styled.div`
  font-size: 13px;
  font-weight: 600;
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
