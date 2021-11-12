import React, { useState, useEffect, useRef } from "react";
import { AddArea } from "./styled";
import { useHistory } from "react-router";
import api from "../../api";
import Banner from "../../components/Banner";
import { ErrorMsg } from "../../components/mainComponents";
import { Container, Row } from "react-bootstrap";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import { useStateValue } from "../../contexts/StateContext";

export default function AddAd() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [priceNegotiable, setPriceNegotiable] = useState(false);
  const [desc, setDesc] = useState("");
  const [error, setError] = useState("");
  const [categoires, setCategoires] = useState([]);
  const [state, dispatch] = useStateValue();
  let fotoField = useRef();
  const history = useHistory();
  const priceMask = createNumberMask({
    prefix: "R$ ",
    includeThousandsSeparator: true,
    thousandsSeparatorSymbol: ".",
    allowDecimal: true,
    decimalSymbol: ",",
  });

  useEffect(() => {
    async function loadCategories() {
      const cats = await api.getCategories();
      setCategoires(cats);
    }
    loadCategories();
  }, []);

  async function handleSubmitAd(e) {
    e.preventDefault();
    setLoading(true);
    setError("");

    let errors = [];
    if (!title.trim()) {
      errors.push("Sem titulo");
    }
    if (!category) {
      errors.push("Sem categoria");
    }
    if (errors.length === 0) {
      /*
          let img = [];

      if (fotoField.current.files.length > 0) {
        for (let i = 0; i < fotoField.current.files.length; i++) {
          img.push(fotoField.current.files[i]);
        }
      }
    */
      const json = await api.adProduct(
        title,
        price,
        priceNegotiable,
        desc,
        category,
        fotoField,
        state.user.token
      );
      if (!json.error) {
        history.push(`/ad/${json.id}`);
        return;
      } else {
        setError(json.error);
      }
    } else {
      setError(errors.join("\n"));
    }
    setLoading(false);
  }
  return (
    <AddArea>
      {error && <ErrorMsg>{error}</ErrorMsg>}

      <Banner name="Cadastrar anúncio" />
      <Container>
        <Row>
          <form onSubmit={handleSubmitAd} className="login_Register_Form">
            <div>
              <input
                disabled={loading}
                required
                type="text"
                placeholder="Titulo"
                required
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
            <div>
              <select
                disabled={loading}
                required
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Categorias</option>
                {categoires.map((item, k) => (
                  <option value={item._id} key={k}>
                    {item.name}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <MaskedInput
                mask={priceMask}
                placeholder="R$ "
                disabled={loading}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </div>
            <div>
              <span>Preço Negociável</span>
              <input
                disabled={loading}
                type="checkbox"
                checked={priceNegotiable}
                onChange={(e) => setPriceNegotiable(!priceNegotiable)}
              />
            </div>
            <div>
              <textarea
                disabled={loading}
                type="text"
                placeholder="Descrição"
                required
                value={desc}
                onChange={(e) => setDesc(e.target.value)}
              ></textarea>
            </div>
            <div>
              <input
                disabled={loading}
                required
                type="file"
                placeholder="Titulo"
                multiple
                ref={fotoField}
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </Row>
      </Container>
    </AddArea>
  );
}
