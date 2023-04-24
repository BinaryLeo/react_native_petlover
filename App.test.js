import React from "react";
import { fireEvent, render } from "@testing-library/react-native";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import renderer from "react-test-renderer";

import App from "./App";

import { Login } from "./src/screens/signin/";

describe("<Login />", () => {
  const mockStore = configureStore([]);
  let store;
  let component;

  beforeEach(() => {
    store = mockStore({
      authState: {
        logged: false,
        token: "",
        username: "",
      },
    });
    component = render(
      <Provider store={store}>
        <Login />
      </Provider>
    );
  });

  it("renders all input fields", () => {
    const emailInput = component.getByPlaceholderText("E-mail");
    const passwordInput = component.getByPlaceholderText("Senha");

    expect(emailInput).toBeDefined();
    expect(passwordInput).toBeDefined();
  });

  it("updates email and password fields on input", () => {
    const emailInput = component.getByPlaceholderText("E-mail");
    const passwordInput = component.getByPlaceholderText("Senha");

    fireEvent.changeText(emailInput, "usuário@palmsoft.com.br");
    fireEvent.changeText(passwordInput, "senha");

    expect(emailInput.props.value).toBe("usuário@palmsoft.com.br");
    expect(passwordInput.props.value).toBe("senha");
  });

  describe("<App />", () => {
    it("has 1 child", () => {
      const tree = renderer.create(<App />).toJSON();
      expect(tree.children.length).toBe(1);
    });
  });
});
