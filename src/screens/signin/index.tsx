import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { signIn } from "../../services/api";
import {
  beLogged,
  setToken as updateToken,
} from "../../store/modules/Auth.store";
import {
  ButtonLabel,
  Container,
  Input,
  InputContainer,
  Inputlabel,
  Loader,
  Picture,
  SignInButton,
  Status,
  StatusContainer,
  Subtitle,
  Title,
} from "./style";
//* Define Login component
export function Login() {
  //* Define state variables
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [token, setToken] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  //* Get dispatch function from Redux store
  const dispatch = useDispatch();

  //* Handle login button press
  const handleLogin = async () => {
    try {
      //* Call API to sign in user
      const result = await signIn(username, password);
      if (result.success) {
        console.log("Login realizado com sucesso");
        setErrorMessage("");
        if (result.token) {
          //* If token is returned, update Redux store
          // wait for 2 seconds before setting isLoading to false
          setIsLoading(true);
          setTimeout(() => {
            setIsLoading(false);
            setToken(result.token);
            dispatch(updateToken(result.token));
            dispatch(beLogged(username));
          }, 1500);
        }
      } else {
        //* If sign-in failed, set error message and clear token
        setErrorMessage(result.message || "Ocorreu um erro ao fazer login");
        setToken("");
      }
    } catch (error) {
      //* Handle errors from API call
      console.error("Erro na requisição", error);
      setErrorMessage("Ocorreu um erro ao fazer login");
    }
  };

  //* Render login form
  return (
    <Container>
      <Picture source={require("../../assets/ico.png")} />
      <Title>LOGIN</Title>
      <Subtitle>Insira seus dados para continuar</Subtitle>
      <InputContainer>
        <Inputlabel>EMAIL</Inputlabel>
        <Input
          placeholder="E-mail"
          value={username}
          onChangeText={setUsername}
          autoCapitalize="none"
        />
        <Inputlabel>SENHA</Inputlabel>
        <Input
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </InputContainer>
      <SignInButton onPress={handleLogin}>
        <ButtonLabel>Entrar</ButtonLabel>
      </SignInButton>
      <StatusContainer>
        {isLoading && <Loader />}
        <Status>{!!errorMessage && <Subtitle>{errorMessage}</Subtitle>}</Status>
      </StatusContainer>

      {/* Display token 
        <Text style={{ marginTop: 20 }}>TOKEN</Text>
        <Text style={{ marginTop: 10 }}>{token}</Text>*/}
    </Container>
  );
}
