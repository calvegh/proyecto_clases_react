import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const DEFAULT_STATE: UserWithId[] = [
  { name: "Juan", username: "juanito", email: "juanito@gmail.com", id: "1" },
];

export interface User {
  name: string;
  username: string;
  email: string;
}
export type userId = string;
interface UserWithId extends User {
  id: userId;
}
const initialState: UserWithId[] = (() => {
  const users = localStorage.getItem("__redux__users__");
  if (users) {
    return JSON.parse(users);
  }
  return DEFAULT_STATE;
})(); /* Valor de retorno de la función */

export const usersSlice = createSlice({
  name: "users",
  initialState,
  reducers: {
    addUser: (state, action: PayloadAction<User>) => {
      state.push({ ...action.payload, id: crypto.randomUUID() });
    },
    deleteUser: (state, action: PayloadAction<userId>) => {
      return state.filter((user) => user.id !== action.payload);
    },
    updateUser: (state, action: PayloadAction<UserWithId>) => {
      const { id, ...user } = action.payload;
      const index = state.findIndex((user) => user.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...user };
      }
    },
  },
});

export const { addUser } = usersSlice.actions;
export default usersSlice.reducer;
