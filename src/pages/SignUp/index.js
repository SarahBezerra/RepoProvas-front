import { SpinnerCircular } from "spinners-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Container, Form, StyledLink } from "../../components/styleSignInAndSignUp.js";
import { api } from "../../services/api.js";

export default function SignUp() {
  const navigate = useNavigate();
  const [isEnabled, setIsEnabled] = useState(true);
  const [signUpData, setSignUpData] = useState({
    email: "",
    password: "",
    confirm_password: ""
  });

  function handleInputChange(e) {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();

    const { email, password, confirm_password } = signUpData;
    if(password !== confirm_password){
      alert("as duas senhas devem ser iguais")
      return;
    }

    setIsEnabled(false);

    api.postSignUp({ email, password })
      .then((response) => {
        setIsEnabled(true);
        navigate("/");
      })
      .catch((error) => {
        setIsEnabled(true);
        console.log(error.response.data)
      });
    }

  return (
    <Container>
      <Form isEnabled={isEnabled}>
        <h2>Cadastro</h2>
        <button>ENTRAR COM O GITHUB</button>
        <p>ou</p>
        <form onSubmit={handleLogin}>
          <fieldset disabled={!isEnabled}>
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={signUpData.email}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="password"
              placeholder="Senha"
              name="password"
              value={signUpData.password}
              onChange={handleInputChange}
              required
            ></input>
            <input
              type="password"
              placeholder="Confirme sua senha"
              name="confirm_password"
              value={signUpData.confirm_password}
              onChange={handleInputChange}
              required
            ></input>
            <footer>
              <StyledLink to="/">Já possuo cadastro</StyledLink>
              <button type="submit">
                {isEnabled ? (
                  "CADASTRAR"
                ) : (
                  <SpinnerCircular
                    size={10}
                    thickness={100}
                    speed={100}
                    color="#1877F2"
                    secondaryColor="#fff"
                  />
                )}
              </button>
            </footer>
          </fieldset>
        </form>
      </Form>
    </Container>
  );
}
