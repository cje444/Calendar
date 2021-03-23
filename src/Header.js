import React from "react";
import styled from "styled-components";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";

const Header =(props) =>{

    return (
        <div className="App">
          <HeaderContainer>
            <h2>헤더</h2>
            <ButtonBox>
              <ButtonGroup
                disableElevation
                variant="contained"
                size="small"
                color="primary"
              >
                <Button>
                  <ArrowBackIosIcon
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </Button>
                <Button>
                  <ArrowForwardIosIcon
                    style={{ color: "white", fontSize: "30px" }}
                  />
                </Button>
              </ButtonGroup>
            </ButtonBox>
          </HeaderContainer>
        </div>
      )

}
    // App 컴포넌트의 state를 정의해줍니다.   
   




///Styled Component 
const HeaderContainer = styled.div`
  background-color: royalblue;
  color: white;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: 90px;

  & h2 {
    font-size: 30px;
    margin: 30px;
  }
  & h3 {
    margin: 20px;
  }
`;


const ButtonBox = styled.div`
  margin: 30px;
  

`;

export default Header;
