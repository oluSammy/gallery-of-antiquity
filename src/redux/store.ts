import { combineReducers, configureStore } from "@reduxjs/toolkit";
import localForage from "localforage";
import { persistReducer, persistStore } from "redux-persist";
import NotificationReducer from "./Notification";
import TopCategoriesReducer from "./topCategories";

const persistConfig = {
  key: "root",
  storage: localForage,
};

let rootReducer = combineReducers({
  notification: NotificationReducer,
  topCategories: TopCategoriesReducer,
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
