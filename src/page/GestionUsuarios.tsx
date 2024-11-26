import React, { useState } from "react";
import { MainLayout } from "../layout/MainLayout";
import { useDispatch } from "react-redux";
import { addUser } from "../states/userSlice";

interface IForm {
  name: string;
  username: string;
  email: string;
}
export const GestionUsuarios = () => {
  const [form, setForm] = useState<IForm>({
    name: "",
    username: "",
    email: "",
  });
  const dispatch = useDispatch();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setForm({ ...form, [name]: value });
  };
  const handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const { name, username, email } = form;
    if (name === "" || username === "" || email === "") {
      alert("Favor completar todos los campos");
      return;
    }
    dispatch(addUser(form));
  };
  return (
    <MainLayout>
      <h3>Creación de usuarios</h3>
      <form>
        <input
          type="text"
          name="name"
          placeholder="Ingreso nombre"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="username"
          placeholder="Ingreso usuario"
          value={form.username}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Ingrese email"
          value={form.email}
          onChange={handleChange}
        />
        <button type="submit" onClick={handleSubmit}>
          Guardar
        </button>
      </form>
    </MainLayout>
  );
};
