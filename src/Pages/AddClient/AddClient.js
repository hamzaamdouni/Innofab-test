import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addClient } from "../../JS/actions/client";
import {
  AddClientsContainer,
  AddClientsContent,
  AddClientsContentForm,
  AddClientsContentInput,
  AddClientsContentinputfield,
  AddClientsContentinputfieldBtn,
  AddClientsContentLabel,
  AddClientsContentRetunbtn,
  AddClientsContentSubmitInput,
  AddClientsContentTitle,
} from "./AddClientElements";

const AddClient = () => {
  const [client, setClient] = useState({
    cin: "",
    nom: "",
    prenom: "",
    adress: "",
    phone: "",
    email: "",
  });
  const dispatch = useDispatch();

  const handleClient = (e) => {
    setClient({ ...client, [e.target.name]: e.target.value });
  };

  const handleRegister = (e) => {
    dispatch(addClient(client));
    setClient({
      cin: "",
      nom: "",
      prenom: "",
      adress: "",
      phone: "",
      email: "",
    });

    e.preventDefault();
  };
  return (
    <AddClientsContainer>
      <AddClientsContent>
        <AddClientsContentTitle> Ajouter un client</AddClientsContentTitle>
        <AddClientsContentForm
          encType="multipart/form-data"
          onSubmit={handleRegister}
        >
          <AddClientsContentinputfield>
            <AddClientsContentLabel>
              {" "}
              Numéro carte d'identité :{" "}
            </AddClientsContentLabel>
            <AddClientsContentInput
              type="text"
              placeholder="Enter votre numéro carte d'identité"
              required
              maxlength="8"
              name="cin"
              onInput={handleClient}
              value={client.cin}
            />
          </AddClientsContentinputfield>

          <AddClientsContentinputfield>
            <AddClientsContentLabel> Nom : </AddClientsContentLabel>
            <AddClientsContentInput
              type="text"
              placeholder="Enter votre nom"
              required
              name="nom"
              onInput={handleClient}
              value={client.nom}
            />
          </AddClientsContentinputfield>

          <AddClientsContentinputfield>
            <AddClientsContentLabel> Prénom : </AddClientsContentLabel>
            <AddClientsContentInput
              type="text"
              placeholder="Enter votre Prénom"
              required
              name="prenom"
              onInput={handleClient}
              value={client.prenom}
            />
          </AddClientsContentinputfield>

          <AddClientsContentinputfield>
            <AddClientsContentLabel> Adresse : </AddClientsContentLabel>
            <AddClientsContentInput
              type="text"
              placeholder="Enter votre Adresse"
              required
              name="adress"
              onInput={handleClient}
              value={client.adress}
            />
          </AddClientsContentinputfield>

          <AddClientsContentinputfield>
            <AddClientsContentLabel> Phone : </AddClientsContentLabel>
            <AddClientsContentInput
              type="number"
              placeholder="Enter votre Phone"
              required
              min="20000001"
              max="99999999"
              name="phone"
              onInput={handleClient}
              value={client.phone}
            />
          </AddClientsContentinputfield>

          <AddClientsContentinputfield>
            <AddClientsContentLabel> Email : </AddClientsContentLabel>
            <AddClientsContentInput
              type="email"
              placeholder="Enter votre Email"
              required
              name="email"
              onInput={handleClient}
              value={client.email}
            />
          </AddClientsContentinputfield>

          <AddClientsContentinputfieldBtn>
            <AddClientsContentRetunbtn to="/">Retour</AddClientsContentRetunbtn>

            <AddClientsContentSubmitInput type="submit" value="Enregistrer" />
          </AddClientsContentinputfieldBtn>
        </AddClientsContentForm>
      </AddClientsContent>
    </AddClientsContainer>
  );
};

export default AddClient;

/*
<div>
  <div className="IdentifiyContainer">
    <div className="IdentifiyContent">
      <div className="wrapper">
        <form
          className="form"
          encType="multipart/form-data"
          onSubmit={handleRegister}
        >

          </div>

       
       
          </div>
          <div className="inputfield">
            <input type="submit" defaultValue="Register" className="btn" />
          </div>
        </form>
        <div className="option">
          <span>Vous avez un compte ? </span>
          <LinkR to="/login" className="toregister">
            {" "}
            S'identifier
          </LinkR>
        </div>
      </div>
    </div>
  </div>
</div>;
*/
