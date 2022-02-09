import {
  ADD_CLIENT,
  FAIL_CLIENT,
  GET_CLIENTS,
  GET_ONE_CLIENT,
  LOAD_CLIENT,
} from "../constatns/client";

const initialState = {
  isloadClient: false,
  newClient: {},
  clients: [],
  oneClient: {},
  errors: [],
};

const ClientrReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD_CLIENT:
      return { ...state, isloadClient: true };
    case ADD_CLIENT:
      return { ...state, newClient: payload.newClient, isloadClient: false };
    case GET_CLIENTS:
      return { ...state, clients: payload.Clientslist, isloadClient: false };
    case GET_ONE_CLIENT:
      return { ...state, oneClient: payload.OneClient, isload: false };
    case FAIL_CLIENT:
      return { ...state, errors: payload, isloadClient: false };
    default:
      return { ...state };
  }
};

export default ClientrReducer;
