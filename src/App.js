import "./App.css";

import { Routes, Route } from "react-router-dom";

import Clients from "./Pages/Clients/Clients";
import OneClient from "./Pages/OneClient/OneClient";
import AddClient from "./Pages/AddClient/AddClient";
import { useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getClients, getOneClient } from "./JS/actions/client";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  const [idclient, setIdclient] = useState("");
  useEffect(() => {
    dispatch(getOneClient(idclient));
  }, [dispatch, idclient]);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Clients setIdclient={setIdclient} />} />
        <Route exact path="/oneclient" element={<OneClient />} />
        <Route exact path="/addclient" element={<AddClient />} />
      </Routes>
    </div>
  );
}

export default App;
