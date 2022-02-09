import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";

export const ClientsContentTR = styled.tr`
  :hover {
    background-color: #252442;
  }
  @media screen and (max-width: 786px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ClientsContentTD = styled.td`
  color: white;
  padding: 8px 12px;
  font-size: 12px;
`;
export const ClientsContentTDLink = styled(LinkR)`
  color: white;
  padding: 8px 12px;
  font-size: 12px;
  margin-left: 40%;
  text-decoration: none;
  :hover {
    color: green;
  }
  @media screen and (max-width: 786px) {
    margin-left: 0%;
    padding: 8px 2px;
  }
`;

export const ClientsContentTDBtn = styled.button`
  color: white;
  padding: 5px 12px;
  font-size: 12px;
  width: 100%;
  background: transparent;
  border: none;
  cursor: pointer;
  :hover {
    color: red;
  }
  @media screen and (max-width: 786px) {
    margin-left: 0%;
    padding: 5px 2px;
    width: 90%;
  }
`;
