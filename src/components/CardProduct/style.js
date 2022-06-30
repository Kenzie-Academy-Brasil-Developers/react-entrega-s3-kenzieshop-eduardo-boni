import styled from "styled-components";

export const Card = styled.div`
  
  border-radius: 5px;
  border: 1px solid black;

  background-color: white;
  
  width: 300px;
  height: 430px;

  margin-bottom:15px;
  margin: 10px auto;

  display: flex;
  flex-direction: column;
  
  img {
    width: 80%;
    height: 250px;
    border-radius: 5px;
    margin: auto; 
  }

  h3{
    margin: 10px auto;
    color: red;
  }

  h4{
    margin: 10px;
    border-bottom: 1px solid #2f3e42;
  }

  .category {
    font-family: Arial, Helvetica, sans-serif;
    color: #2f3e42;
    text-align: center;
    border: none;
  }

  button{
      background-color: black;
      width: 80px;

      font-weight:7 00;
      color: white;

      border-radius: 8px;
      border: 2px solid gray;

      padding: 10px;
      margin: 0px 0px 15px 110px;
      margin-bottom: 15px;

      cursor: pointer;
    }
`;