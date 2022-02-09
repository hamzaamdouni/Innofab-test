import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const AddClientsContainer = styled.div`
  background: #211f3b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const AddClientsContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: 70%;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 786px) {
    width: 95%;
    height: 80%;
    overflow: auto;
  }
`;

export const AddClientsContentTitle = styled.h1`
  color: white;
  font-size: 20px;
  margin-bottom: 25px;
`;

export const AddClientsContentForm = styled.form`
  width: 100%;
  background: #23233f;
  padding: 20px;
  border: 1px solid #373367;
  border-radius: 0.5em;
  @media screen and (max-width: 786px) {
    padding: 5px;
  }
`;
export const AddClientsContentinputfield = styled.div`
  margin-bottom: 15px;
  display: flex;
  align-items: center;
  border: 1px solid #373367;
  border-radius: 2em;
  @media screen and (max-width: 786px) {
    border-radius: 1em;
    flex-direction: column;
  }
`;
export const AddClientsContentLabel = styled.label`
  width: 25%;
  color: #757575;
  margin-right: 10px;
  font-size: 14px;
  padding: 10px;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;
export const AddClientsContentInput = styled.input`
  width: 75%;
  outline: none;
  border: none;
  background: transparent;
  color: white;
  font-size: 15px;
  padding: 8px 10px;
  border-radius: 3px;
  transition: all 0.3s ease;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;
export const AddClientsContentinputfieldBtn = styled.div`
  display: flex;
  justify-content: end;
`;

export const AddClientsContentSubmitInput = styled.input`
  width: 200px;
  padding: 8px 10px;
  font-size: 15px;
  border: 0px;
  background: #423f6e;
  border: 2px solid #423f6e;
  color: #fff;
  cursor: pointer;
  border-radius: 2em;
  outline: none;
  :hover {
    border: 2px solid #423f6e;
    background: transparent;
    color: #423f6e;
  }
`;

export const AddClientsContentRetunbtn = styled(LinkR)`
  width: 200px;
  padding: 8px 78px;
  background-color: transparent;
  color: white;
  border: 1px solid #423f6e;
  border-radius: 2em;
  margin-right: 15px;
  text-decoration: none;

  :hover {
    background-color: #423f6e;
    border: 1px solid #423f6e;
  }
`;
