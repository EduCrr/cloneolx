const initialState = {
  email: "",
  name: "",
  token: "",
  estado: "",
  rememberPassword: false,
};

export default function UserReducer(state = initialState, action = {}) {
  switch (action.type) {
    case "setEmail":
      return { ...state, email: action.email };
      break;
    case "setName":
      return { ...state, name: action.name };
      break;
    case "setToken":
      return { ...state, token: action.token };
      break;

    case "setRemember":
      return { ...state, rememberPassword: action.rememberPassword };
      break;

    case "setEstado":
      return { ...state, estado: action.estado };
      break;
  }
  return state;
}
