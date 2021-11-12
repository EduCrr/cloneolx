import React, { useState } from "react";
import { LoginArea } from "./styled";
import { Container, Row } from "react-bootstrap";
import Banner from "../../components/Banner";
import api from "../../api";
import { ErrorMsg } from "../../components/mainComponents";
import { useStateValue } from "../../contexts/StateContext";
export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberPassword, setRememberPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [state, dispatch] = useStateValue();
  async function handleSubmit(e) {
    let token = "";
    e.preventDefault();
    setLoading(true);
    setError("");
    const json = await api.getLogin(email, password);
    if (json.error !== "") {
      setError(json.error);
      setLoading(false);
      return;
    } else {
      dispatch({
        type: "setToken",
        token: json.token,
      });
      dispatch({
        type: "setRemember",
        rememberPassword,
      });
      token += json.token;
      setError(false);
    }

    const userInfo = await api.getUser(token);
    if (userInfo.error !== "") {
      setError(userInfo.error);
      setLoading(false);
    }
    dispatch({
      type: "setName",
      name: userInfo.name,
    });
    dispatch({
      type: "setEmail",
      email: userInfo.email,
    });
    dispatch({
      type: "setEstado",
      estado: userInfo.state,
    });
    window.location.href = "/";
  }

  return (
    <LoginArea>
      <Banner name="Login" />
      <Container>
        <Row>
          {error && <ErrorMsg>{error}</ErrorMsg>}
          <form onSubmit={handleSubmit} className="login_Register_Form">
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
              />
            </div>
            <div className="radio">
              <span>Lembrar Senha</span>
              <input
                disabled={loading}
                type="checkbox"
                checked={rememberPassword}
                onChange={() => setRememberPassword(!rememberPassword)}
              />
            </div>
            <button type="submit">Enviar</button>
          </form>
        </Row>
      </Container>
    </LoginArea>
  );
}
