import React, { useState, useEffect } from "react";
import { CadastrarArea } from "./styled";
import { Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import api from "../../api";
import { useStateValue } from "../../contexts/StateContext";
import { ErrorMsg } from "../../components/mainComponents";

export default function Cadastrar() {
  const [name, setName] = useState("");
  const [estado, setEstado] = useState("");
  const [estadoLista, setEstadoLista] = useState([]);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [state, dispatch] = useStateValue();

  useEffect(() => {
    async function loadEstados() {
      const list = await api.getlist();
      setEstadoLista(list.states);
    }
    loadEstados();
  }, []);

  async function handleCadastro(e) {
    setLoading(true);
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Senha não são iguais");
      setLoading(false);
      return;
    }

    const json = await api.getCadastro(name, email, password, estado);

    if (json !== "") {
      setError(json.error);
      setLoading(false);
    } else {
      dispatch({
        type: "setName",
        name,
      });
      dispatch({
        type: "setEmail",
        email,
      });
      dispatch({
        type: "setEstado",
        estado,
      });
      dispatch({
        type: "setToken",
        token: json.token,
      });
      console.log(json);
      setError(false);
    }
    window.location.href = "/login";
    setLoading(false);
  }
  return (
    <CadastrarArea>
      <Banner name="Cadastrar" />
      <Container>
        <Row>
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <form onSubmit={handleCadastro} className="login_Register_Form">
            <div>
              <input
                required
                disabled={loading}
                value={name}
                onChange={(e) => setName(e.target.value)}
                type="text"
                placeholder="Nome"
              />
            </div>
            <div>
              <select
                value={estado}
                onChange={(e) => setEstado(e.target.value)}
                required
              >
                <option value="">Estado</option>
                {estadoLista.map((item, k) => (
                  <option key={k} value={item._id}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <input
                required
                disabled={loading}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="text"
                placeholder="Email"
              />
            </div>
            <div>
              <input
                required
                disabled={loading}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Senha"
                disabled={loading}
                type="password"
                placeholder="Senha"
              />
            </div>
            <div>
              <input
                required
                disabled={loading}
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Senha"
                disabled={loading}
                type="password"
                placeholder="Confirmar Senha"
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </Row>
      </Container>
    </CadastrarArea>
  );
}
