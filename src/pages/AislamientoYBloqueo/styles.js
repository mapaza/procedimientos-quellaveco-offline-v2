import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  position: relative;
  overflow-y: scroll;

`;

export const PoweredBy = styled.img`
  position: absolute;
  bottom: 0px;
  background-color: rgba(2, 169, 233, 0.2);
  right: 0px;
  padding: 2.5px;
  height: 25px;
`;

export const Controls = styled.div`
  position: absolute;  
  background-color: rgba(2, 169, 233, 0.2);
  bottom: 7%;
  right: 7%;
  border-radius: 50%;
  height: 150px;
  width: 150px;
  display:flex;
  justify-content: center;
  align-items: center;  
`;

export const RightArrow = styled.img`
  width: 50px;  
  margin: 1rem;
  cursor: pointer;
`;

export const LeftArrow = styled.img`
  width: 50px; 
  margin: 1rem;
  cursor: pointer;
`;

export const TopArrow = styled.img`
  height: 50px;  
  position: absolute;
  margin-bottom: 5rem;
  cursor: pointer;
`;

export const BotArrow = styled.img`
  height: 50px;  
  position: absolute;
  margin-top: 5rem;
  cursor: pointer;
`;

export const ButtonAtras = styled.div`
width: 7vh;
height: 10vh;
/* margin: 0px auto; */
padding: 2vh 2vh;
text-align: center;
background: rgba(3, 23, 149, 0.74);
position: absolute;
left: 5vh;
top: 5vh;
font-family: Roboto, sans-serif;
color: rgb(255, 255, 255);
font-size: 4vh;
transition: 0.5s all;
&:hover{
  color: #ff0000;
  transform: scale(1.15);
  cursor: pointer;
}
`;