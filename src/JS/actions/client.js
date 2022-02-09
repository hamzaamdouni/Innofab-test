import axios from "axios";

import {
  ADD_CLIENT,
  FAIL_CLIENT,
  GET_CLIENTS,
  GET_ONE_CLIENT,
  LOAD_CLIENT,
} from "../constatns/client";

export const getClients = () => async (dispatch) => {
  dispatch({ type: LOAD_CLIENT });
  try {
    let { data } = await axios.get(
      `https://innofab-test.herokuapp.com/api/client/clients`
    );
    console.log(data);
    dispatch({ type: GET_CLIENTS, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_CLIENT, payload: error.response.data });
  }
};

export const getOneClient = (idclient) => async (dispatch) => {
  dispatch({ type: LOAD_CLIENT });
  try {
    let { data } = await axios.get(
      `https://innofab-test.herokuapp.com/api/client/client/${idclient}`
    );
    dispatch({ type: GET_ONE_CLIENT, payload: data });
  } catch (error) {
    dispatch({ type: FAIL_CLIENT, payload: error.response.data });
  }
};

export const addClient = (newClient) => async (dispatch) => {
  dispatch({ type: LOAD_CLIENT });
  try {
    let { data } = await axios.post(
      "https://innofab-test.herokuapp.com/api/client/register",
      newClient
    );
    console.log("hamza", data);
    dispatch({ type: ADD_CLIENT, payload: data });
    dispatch(getClients());
  } catch (error) {
    dispatch({ type: FAIL_CLIENT, payload: error.response.data });
  }
};

export const editClient = (idclient, editClient) => async (dispatch) => {
  try {
    await axios.put(
      `https://innofab-test.herokuapp.com/api/client/client/${idclient}`,
      editClient
    );
    dispatch(getOneClient(idclient));
    dispatch(getClients());
  } catch (error) {
    dispatch({ type: FAIL_CLIENT, payload: error.response.data });
  }
};

export const deleteClient = (idclient) => async (dispatch) => {
  try {
    await axios.delete(
      `https://innofab-test.herokuapp.com/api/client/client/${idclient}`
    );
    dispatch(getClients());
  } catch (error) {
    dispatch({ type: FAIL_CLIENT, payload: error.response.data });
  }
};
