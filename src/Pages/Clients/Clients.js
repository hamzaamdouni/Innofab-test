import React, { useState } from "react";
import { useSelector } from "react-redux";

import { BsPlusLg } from "react-icons/bs";
import {
  AddBtn,
  AddBtnLinks,
  AddBtnTitle,
  ClientAddBtn,
  ClientsContainer,
  ClientsContent,
  ClientsContentSearching,
  ClientsContentTable,
  ClientsContentTH,
  ClientsContentTitle,
  ClientsContentTR,
  SearchingInput,
  SearchinSlecet,
  SearchinSlecetOption,
} from "./ClientsElements";
import TableTD from "../../Components/TableTD";

const Clients = ({ setIdclient }) => {
  const [recherche, setRecherche] = useState("");

  const clients = useSelector((state) => state.ClientrReducer.clients);
  const handleRecherche = (e) => {
    setRecherche(e.target.value);
  };

  const result = clients.filter((client) => client.cin.includes(recherche));
  return (
    <ClientsContainer>
      <ClientsContent>
        <ClientsContentTitle> Gestion des clients</ClientsContentTitle>

        <ClientsContentSearching>
          <SearchingInput
            type="text"
            placeholder="Recherche"
            required
            name="recherche"
            onInput={handleRecherche}
            value={recherche}
          />
          <SearchinSlecet name="selected">
            <SearchinSlecetOption value="0">
              Numéro carte d'identité
            </SearchinSlecetOption>
            <SearchinSlecetOption value="1">Nom</SearchinSlecetOption>
            <SearchinSlecetOption value="2">Prénom</SearchinSlecetOption>
            <SearchinSlecetOption value="3">Adresse</SearchinSlecetOption>
            <SearchinSlecetOption value="4">Phone</SearchinSlecetOption>
            <SearchinSlecetOption value="5">Email</SearchinSlecetOption>
          </SearchinSlecet>
        </ClientsContentSearching>

        <ClientsContentTable>
          <ClientsContentTR>
            <ClientsContentTH>Numéro carte d'identité</ClientsContentTH>
            <ClientsContentTH>Nom</ClientsContentTH>
            <ClientsContentTH>Prénom</ClientsContentTH>
            <ClientsContentTH>Adresse</ClientsContentTH>
            <ClientsContentTH>Phone</ClientsContentTH>
            <ClientsContentTH>Email</ClientsContentTH>
            <ClientsContentTH> </ClientsContentTH>
            <ClientsContentTH> </ClientsContentTH>
          </ClientsContentTR>
          {result.map((client) => (
            <TableTD client={client} setIdclient={setIdclient} />
          ))}
        </ClientsContentTable>
      </ClientsContent>
      <ClientAddBtn>
        <AddBtnLinks to={`/addclient`}>
          <AddBtn>
            <BsPlusLg size={15} />
            <AddBtnTitle>Ajouter un client</AddBtnTitle>
          </AddBtn>
        </AddBtnLinks>
      </ClientAddBtn>
    </ClientsContainer>
  );
};

export default Clients;
