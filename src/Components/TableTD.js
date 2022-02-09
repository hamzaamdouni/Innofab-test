import React from "react";
import { useDispatch } from "react-redux";
import { deleteClient } from "../JS/actions/client";
import {
  ClientsContentTD,
  ClientsContentTDBtn,
  ClientsContentTDLink,
  ClientsContentTR,
} from "./TableTDElements";

const TableTD = ({ client, setIdclient }) => {
  const dispatch = useDispatch();

  const handeId = () => {
    setIdclient(client._id);
  };
  const handeDelete = () => {
    dispatch(deleteClient(client._id));
  };
  return (
    <ClientsContentTR key={client._id}>
      <ClientsContentTD>{client.cin}</ClientsContentTD>
      <ClientsContentTD>{client.nom}</ClientsContentTD>
      <ClientsContentTD>{client.prenom}</ClientsContentTD>
      <ClientsContentTD>{client.adress}</ClientsContentTD>
      <ClientsContentTD>{client.phone}</ClientsContentTD>
      <ClientsContentTD>{client.email}</ClientsContentTD>
      <ClientsContentTD>
        {" "}
        <ClientsContentTDLink to={`/oneclient`} onClick={handeId}>
          Modifier
        </ClientsContentTDLink>
      </ClientsContentTD>
      <ClientsContentTD>
        <ClientsContentTDBtn onClick={handeDelete}>
          Supprimer
        </ClientsContentTDBtn>
      </ClientsContentTD>
    </ClientsContentTR>
  );
};

export default TableTD;
