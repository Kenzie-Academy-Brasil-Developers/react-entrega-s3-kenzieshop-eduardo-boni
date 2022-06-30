import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;

  margin: auto;
  margin-bottom: 15px;

  width: 90%;
  background-color: black;

  border-radius: 5px;
  border: 2px solid black;
  

  img {
    width: 50%;
    margin-left: 10%;
    margin-right: 15px;
  }

  div {
    display: flex;
    flex-direction: column;
    margin-right: 10%;

    p {
      font-family: Arial;
      color: white;
      margin: 15px;
    }

    button {
      background-color: gray;

      border-radius: 8px;
      border: 2px solid white;

      padding: 10px;
      color: white;
      font-weight: 700;
      
      cursor: pointer;
    }
  }

  @media screen and (max-width: 550px) {
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: center;
   
    text-align: center;
    
    button {
      width: 80%;
      margin: 5px 30px;
    }

    img {
    width: 55%;
    margin-right: 30px;
  }
  }
`;