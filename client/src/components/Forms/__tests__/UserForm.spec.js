import React from "react";
import { render, mount } from "enzyme";

import UserForm from "../UserForm";

describe(UserForm, () => {
  describe("Render", () => {
    let wrapper;
    let user = { username: '', password: '' }
    const setUser = (u) => {
      user = u;
    }
    const handleSubmit = () => { }

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = render(<UserForm user={user} setUser={setUser} handleSubmit={handleSubmit} />);
    });

    it("agrega los elementos HTML", () => {
      // Comprobamos los distintos aspectos de HTML
      expect(wrapper.find("form").length).toBe(1);
      // expect(wrapper.find("label").length).toBe(2);
      // expect(wrapper.find('input[type="text"]').length).toBe(1);
      // expect(wrapper.find('input[type="color"]').length).toBe(1);
      expect(wrapper.find("button").length).toBe(1);
    });

    it("muestra", () => {
      // Comprobamos el texto
      expect(wrapper.find("#username").text()).toBe("");
      expect(wrapper.find("#password").text()).toBe("");
    });
  });

  describe("Funcionalidades", () => {
    let wrapper;
    let user = { username: '', password: '' }
    const setUser = (u) => {
      user = u;
    }
    const handleSubmit = (event) => {
      event.preventDefault();

    };

    // Inicializamos el componente en un beforeEach para
    // evitar tener que repetir esta línea en cada test
    beforeEach(() => {
      wrapper = render(<UserForm user={user} setUser={setUser} handleSubmit={handleSubmit} />);
    });

    it("Actualiza el valor cuando se hace Submit", () => {
      // Al igual que los anteriores, también necesitamos utilizar mount, ya que
      // vamos a modificar el valor del input

      // Actualizamos el nombre
      const newName = "newName";
      const input = wrapper.find("#username");
      // Para controlados, necesitamos lanzar el evento
      input.simulate("change", { target: { value: newName } });

      // Acutalizamos la password
      const newPassword = "#ff0000";
      const passwordInput = wrapper.find("#password");
      passwordInput.simulate("change", { target: { value: newPassword } });

      // Simulamos el envío del formulario
      wrapper.find("form").simulate("submit");

      // Comprobamos que se muestran los valores
      expect(wrapper.find("#username").text()).toEqual(newName);
      expect(wrapper.find("#password").text()).toEqual(
        newPassword
      );
    });
  });
});
