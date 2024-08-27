import Styled from "styled-components";
import { theme } from "../../styles/theme";

export const Modal = Styled.div`
  margin: auto;
  height: 100vh;
  width: 80%;
  background: ${theme.colors.colorThree};
  border: 2px solid #000;
  box-shadow: 4px black;
  padding: 20px 10px;
  

`;
export const conteiner = Styled.div`
  /* margin-top: 50%; */
  /* top: -30%; */
  /* margin: auto;
  padding: 20% 10px; */
  margin: 10px;
  /* border: 1px solid violet; */
`;
export const PositionI = Styled.div`
  display:inline-block;
  float:right;
  /* border: 1px solid black; */
  /* margin-top: -2p?x; */
  color: #ffffff;
`;
export const cx = Styled.div`
  /* height: 50px; */
  /* border: 1px solid black; */
  width: 300px;
  height: 4vh;
  display: flex;
  align-items: center;
  border-radius: 7px;
  margin: 5px auto;

`;
export const cxTwo = Styled.div`
  background:#ffff;
  width: 100px;
  display: flex;
  align-items: center;
  border-radius: 7px;
  margin: 10px auto;
  padding:10px;

`;
export const H1 = Styled.h2`
  font-weight:bold;
  margin: auto;
  /* border: 1px solid black; */
  
`;
export const inputs = Styled.div`
  /* border: 1px solid black; */
  display: flex;
  /* weight: 800px; */
  margin: 10px;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  @media(max-width:765px){
    margin: 2px;
}
`;

export const tituloTwo = Styled.input`
  /* border: 1px solid black; */
  border-radius: 7px;
  /* width: 80%; */
  padding: 15px;
  font-weight: bold;
  /* margin: 0px 10%; */
  /* font-size: 10px; */
  margin: 5px 2px;
  width: 30vw;
  height: 38px;

  @media(max-width:765px){
    width: 50vw;
    height: 38px;
}
`;

export const inputsTwo = Styled.div`
  margin: 12px;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;


`;

export const inputsPasswords = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px; 
  justify-content: space-around;
  align-items: center;
`;

export const passwords = Styled.input`
    width: 25vw;
    height: 35px;
    border-radius: 7px;
    padding: 10px;

`;

export const upload = Styled.div`
  width: 60vw;
  margin: 10px auto;
  height: 25vh;
  border-radius: 10px;
  background:white;
  padding: 10px 0px 0px 10px;
  box-sizing: border-box;
  text-align:center;
  cursor:pointer;


  @media(max-width:765px){
    height: 18vh;
}

`;
export const uploadIcon = Styled.div`
  text-align:center;
  font-size:60px;
`;

export const p = Styled.p`
  font-weight:bold;

`;

export const inputsForm = Styled.div`
  display: flex;
  flex-direction: row;
  gap: 5px; 
  justify-content: center;
  align-items: center;

@media(max-width:765px){
  flex-direction: column;
  gap: 0px; 
}
`;

export const divTextarea = Styled.div`
  text-align:center;
`;

export const inputText = Styled.input`
  width: 60vw;
  margin-bottom: 20px;
  margin-top:8px;
  height: 25vh;
  border-radius: 10px;
  padding: 10px 0px 0px 10px;
  box-sizing: border-box;

  @media(max-width:765px){
    height: 18vh;
}

`;

export const btnEntrar = Styled.p`
  margin: auto;
  font-size: 18px;
  color: ${theme.colors.colorThree};
  cursor:pointer;
`;
