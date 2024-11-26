import { configureStore, Middleware } from "@reduxjs/toolkit";
import loggedUser from "./loggedUserSlice";
import userReducer from "./userSlice";

const persistedState: Middleware = (store) => (next) => (action) => {
  next(action);
  const estado = store.getState();
  const estadoAsJson = JSON.stringify(estado.users);
  localStorage.setItem("__redux__users__", estadoAsJson);
};
export const store = configureStore({
  reducer: {
    loggedUser: loggedUser,
    users: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(persistedState),
});
export type RootType = ReturnType<typeof store.getState>;
