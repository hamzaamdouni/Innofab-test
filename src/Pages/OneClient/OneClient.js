import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editClient } from "../../JS/actions/client";
import {
  OneClientsContainer,
  OneClientsContent,
  OneClientsContentForm,
  OneClientsContentInput,
  OneClientsContentinputfield,
  OneClientsContentinputfieldBtn,
  OneClientsContentLabel,
  OneClientsContentRetunbtn,
  OneClientsContentSubmitInput,
  OneClientsContentTitle,
} from "./OneClientElements";

const OneClient = () => {
  const dispatch = useDispatch();

  const client = useSelector((state) => state.ClientrReducer.oneClient);
  console.log("first", client);
  const [newclient, setNewClient] = useState({
    cin: client.cin,
    nom: client.nom,
    prenom: client.prenom,
    adress: client.adress,
    phone: client.phone,
    email: client.email,
  });
  console.log("firstyyyy", newclient);

  const handleClient = (e) => {
    setNewClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    dispatch(editClient(client._id, newclient));
    setNewClient({
      cin: client.cin,
      nom: client.nom,
      prenom: client.prenom,
      adress: client.adress,
      phone: client.phone,
      email: client.email,
    });

    e.preventDefault();
  };

  return (
    <OneClientsContainer>
      <OneClientsContent>
        <OneClientsContentTitle> Modifier un client</OneClientsContentTitle>
        <OneClientsContentForm
          encType="multipart/form-data"
          onSubmit={handleRegister}
        >
          <OneClientsContentinputfield>
            <OneClientsContentLabel>
              {" "}
              Numéro carte d'identité :{" "}
            </OneClientsContentLabel>
            <OneClientsContentInput
              type="text"
              required
              maxlength="8"
              name="cin"
              onInput={handleClient}
              value={newclient.cin}
            />
          </OneClientsContentinputfield>

          <OneClientsContentinputfield>
            <OneClientsContentLabel> Nom : </OneClientsContentLabel>
            <OneClientsContentInput
              type="text"
              required
              name="nom"
              onInput={handleClient}
              value={newclient.nom}
            />
          </OneClientsContentinputfield>

          <OneClientsContentinputfield>
            <OneClientsContentLabel> Prénom : </OneClientsContentLabel>
            <OneClientsContentInput
              type="text"
              required
              name="prenom"
              onInput={handleClient}
              value={newclient.prenom}
            />
          </OneClientsContentinputfield>

          <OneClientsContentinputfield>
            <OneClientsContentLabel> Adresse : </OneClientsContentLabel>
            <OneClientsContentInput
              type="text"
              required
              name="adress"
              onInput={handleClient}
              value={newclient.adress}
            />
          </OneClientsContentinputfield>

          <OneClientsContentinputfield>
            <OneClientsContentLabel> Phone : </OneClientsContentLabel>
            <OneClientsContentInput
              type="number"
              required
              min="20000001"
              max="99999999"
              name="phone"
              onInput={handleClient}
              value={newclient.phone}
            />
          </OneClientsContentinputfield>

          <OneClientsContentinputfield>
            <OneClientsContentLabel> Email : </OneClientsContentLabel>
            <OneClientsContentInput
              type="email"
              required
              name="email"
              onInput={handleClient}
              value={newclient.email}
            />
          </OneClientsContentinputfield>

          <OneClientsContentinputfieldBtn>
            <OneClientsContentRetunbtn to="/">Retour</OneClientsContentRetunbtn>

            <OneClientsContentSubmitInput type="submit" value="Enregistrer" />
          </OneClientsContentinputfieldBtn>
        </OneClientsContentForm>
      </OneClientsContent>
    </OneClientsContainer>
  );
};

export default OneClient;
