import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TopCategory = { productType: string; _id: string; slug: string }[];

export interface topCategoryState {
  topCategories: TopCategory;
}

export const initialState: topCategoryState = {
  topCategories: [],
};

export const topCategorySlice = createSlice({
  name: "topCategories",
  initialState,
  reducers: {
    createTopCategory: (state, action: PayloadAction<TopCategory>) => {
      state.topCategories = action.payload;
    },
  },
});

export const { createTopCategory } = topCategorySlice.actions;

export default topCategorySlice.reducer;
