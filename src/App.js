import React from 'react';
import './App.css';
import Header from "./Header"
// import moment from 'moment'
import styled from 'styled-components';
import Main from "./Main"


export class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      list: ["a","b","c"]
    }
    // App 컴포넌트의 state를 정의해줍니다.
  }



  render() {
      return (
      <div className="App">
        <Outter>
        <Header/>
      
        <h1>Hello Calendar</h1>
        <Main/>




        </Outter>
        
      
      </div>
    );
  }
}


const Outter = styled.div`
width:100vw;
height:100vh;
background-color: aliceblue;
`;



export default App;