const initialState = {
  email: "",
  name: "",
  token: "",
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
  }
  return state;
}
