import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type AccessTokenType =
  | { token: string; email?: string; }
  | undefined;
const initialState: AccessTokenType = { token: "" };
const accessToken = createSlice({
  name: "accessToken",
  initialState,
  reducers: {
    setAccessToken: (state, action: PayloadAction<AccessTokenType>) => {
      if (action.payload === undefined) {
        state.token = "";
        state.email = undefined;
      } else {
        state.token = action.payload?.token || state.token;
        state.email = action.payload?.email || state.email;
      }
    },
    setUserEmail: (state, action: PayloadAction<string | undefined>) => {
      state.email = action.payload;
    },

  },
});
export const { setAccessToken, setUserEmail } =
  accessToken.actions;
export const selectAccessToken = (state: any) => state?.accessToken?.value;
export default accessToken.reducer;
