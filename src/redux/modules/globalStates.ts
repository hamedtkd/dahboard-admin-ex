import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type GlobalStateType = {
    test: boolean;
};
const initialState: GlobalStateType = {
    test: false,
};
const globalState = createSlice({
    name: "globalState",
    initialState,
    reducers: {
        setTest: (state, action: PayloadAction<boolean>) => {
            state.test = action.payload;
        },
    },
});
export const { setTest } = globalState.actions;
export const selectGlobalState = (state: any) => state?.globalState?.value;
export default globalState.reducer;
