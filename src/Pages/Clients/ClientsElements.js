import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ClientsContainer = styled.div`
  background: #211f3b;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  position: relative;
  z-index: 1;
`;

export const ClientsContent = styled.div`
  background: #211f3b;
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 70%;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 786px) {
    width: 95%;
    height: 90%;
    overflow: auto;
  }
`;

export const ClientsContentTitle = styled.h1`
  color: white;
  font-size: 20px;
  margin-bottom: 25px;
  @media screen and (max-width: 786px) {
    margin-top: 15px;
  }
`;

export const ClientsContentTable = styled.table`
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  border-radius: 1em;
  border: 1px solid #292745;
  overflow: hidden;
  width: 100%;
  table-layout: fixed;
  @media screen and (max-width: 786px) {
    table-layout: auto;
    width: 100%;
  }
`;

export const ClientsContentTR = styled.tr`
  :hover {
    background-color: #252442;
  }
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ClientsContentTH = styled.th`
  padding: 8px 12px;
  text-align: left;
  background-color: #292745;
  color: white;
  font-size: 12px;
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;

export const ClientsContentSearching = styled.div`
  color: white;
  padding: 8px 0px;
  width: 100%;
  margin-bottom: 25px;
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;

export const SearchingInput = styled.input`
  background-color: #3c3957;
  color: white;
  padding: 12px 15px;
  width: 50%;
  border-radius: 15px;
  border: 1px solid #373365;
  outline: none;
  margin-right: 15px;
  :focus {
    border: 1px solid #373365;
  }
  @media screen and (max-width: 786px) {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export const SearchinSlecet = styled.select`
  background-color: #3c3957;
  color: white;
  padding: 12px 15px;
  width: 20%;
  border-radius: 15px;
  border: 1px solid #373365;
  outline: none;
  margin-right: 15px;
  :focus {
    border: 1px solid #373365;
  }
  @media screen and (max-width: 786px) {
    width: 100%;
  }
`;
export const SearchinSlecetOption = styled.option``;

export const ClientAddBtn = styled.div`
  width: 100%;
  display: flex;
  justify-content: end;
`;
export const AddBtnLinks = styled(LinkR)`
  margin: 2% 10%;
  padding: 10px 18px;
  background-color: #3c3957;
  color: white;
  border: 1px solid #373365;
  border-radius: 15px;
  :hover {
    background-color: #373365;
    border: 1px solid #3c3957;
  }
`;

export const AddBtn = styled.button`
  background-color: transparent;
  color: white;
  border: none;
  }
`;

export const AddBtnTitle = styled.span`
  padding-left: 15px;
`;
