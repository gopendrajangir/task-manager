import AsyncStorage from "@react-native-async-storage/async-storage";
import { configureStore } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from "redux-persist";

import rootReducer from "./slices";

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
  debug: true,
  whitelist: ["auth"],
};

const persistedReducers = persistReducer(persistConfig, rootReducer);

let store = configureStore({
  reducer: persistedReducers,
  devTools: true,
  middleware: (gDM => gDM({serializableCheck: false}))
});
let persistor = persistStore(store);

const { dispatch } = store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { dispatch, persistor, store };
