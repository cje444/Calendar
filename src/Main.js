import React from "react";
import styled from "styled-components";


//https://bigtop.tistory.com/64?category=827794
const date = new Date();

const viewYear = date.getFullYear();
const viewMonth = date.getMonth();

const prevLast = new Date(viewYear, viewMonth, 0);
const thisLast = new Date(viewYear, viewMonth + 1, 0);

//지난달 마지막 날짜(date) 요일(day)
const PLDate = prevLast.getDate();
const PLDay = prevLast.getDay();

//이번달 마지막 날짜(date) 요일(day)
const TLDate = thisLast.getDate();
const TLDay = thisLast.getDay();

const prevDates = [];
const thisDates = [...Array(TLDate + 1).keys()].slice(1);
const nextDates = [];

if (PLDay !== 6) {
  for (let i = 0; i < PLDay + 1; i++) {
    prevDates.unshift(PLDate - i);
  }
}

for (let i = 1; i < 7 - TLDay; i++) {
  nextDates.push(i);
}

const dates = prevDates.concat(thisDates, nextDates);



const Main = (props) => {
  console.log(dates);
  return (
    <DateHeader>
      <DaysBox>
        <Sun>일</Sun>
        <Week>월</Week>
        <Week>화</Week>
        <Week>수</Week>
        <Week>목</Week>
        <Week>금</Week>
        <Sat>토</Sat>
      </DaysBox>
      <DateBox>
          <EachDate>
              {dates}
          </EachDate>
      </DateBox>
    </DateHeader>
  );
};

const DateHeader = styled.div`
 

  
`;
const DaysBox = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
background-color: white;
align-item: center;
text-align: center;
margin 0 auto;
width:100%;
`;
const DateBox = styled.div``;
const EachDate = styled.div``;

const Sun = styled.div`
  background-color: white;
  color: tomato;
  margin: 10px;
  width: 14%;
`;

const Week = styled.div`
  background-color: white;
  color: black;
  margin: 10px;
  width: 14%;
`;

const Sat = styled.div`
  background-color: white;
  color: blue;
  margin: 10px;
  width: 14%;
`;

export default Main;
