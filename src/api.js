import axios from "axios";

const api = axios.create({
  baseURL: "http://alunos.b7web.com.br:501",
});

export default {
  getUser: async (token) => {
    let { data: json } = await api.get(`/user/me?token=${token}`);

    return json;
  },

  updateUser: async (token, name, estado, password) => {
    let { data: json } = await api.put("/user/me", {
      token,
      name,
      state: estado,
      password,
    });
    if (json.notallowed) {
      window.location.href = "/";
      return;
    }
    return json;
  },

  getLogin: async (email, password) => {
    let { data: json } = await api.post(`/user/signin`, {
      email,
      password,
    });
    if (json.notallowed) {
      window.location.href = "/login";
      return;
    }
    return json;
  },
  getCadastro: async (name, email, password, estado) => {
    let { data: json } = await api.post(`/user/signup`, {
      name,
      email,
      password,
      state: estado,
    });
    if (json.notallowed) {
      window.location.href = "/login";
      return;
    }
    return json;
  },
  getlist: async () => {
    let { data: json } = await api.get("/states");

    return json;
  },

  getCategories: async () => {
    let { data: json } = await api.get("/categories");
    return json.categories;
  },
  getAds: async (options) => {
    let { data: json } = await api.get("/ad/list", options);
    return json;
  },

  getAd: async (option) => {
    let { data: json } = await api.get(`/ad/item`, option);
    return json;
  },

  adProduct: async (
    title,
    price,
    priceNegotiable,
    desc,
    category,
    fotoField,
    token
  ) => {
    let body = new FormData();
    body.append("title", title);
    body.append("price", price);
    body.append("priceneg", priceNegotiable);
    body.append("desc", desc);
    body.append("cat", category);
    body.append("token", token);

    if (fotoField.current.files.length > 0) {
      for (let i = 0; i < fotoField.current.files.length; i++) {
        body.append("img", fotoField.current.files[i]);
      }
    }

    let { data: json } = await api.post("/ad/add", body);
    if (json.notallowed) {
      window.location.href = "/";
      return;
    }
    return json;
  },
};

//https://alunos.b7web.com.br/forum/reactjs/typeerror-cannot-read-property-map-of-undefined

//https://alunos.b7web.com.br/forum/reactjs/outras-ofertas-do-vendedor-nao-atualiza-as-informacoes-na-tela
//https://codepen.io/mosd2004/pen/GXZJJv
