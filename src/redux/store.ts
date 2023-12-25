import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localForage from "localforage";
import { persistReducer, persistStore } from "redux-persist";
import NotificationReducer from "./Notification";

const persistConfig = {
  key: "root",
  storage: localForage,
};

let rootReducer = combineReducers({
  notification: NotificationReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const persistor = persistStore(store);

export default store;
