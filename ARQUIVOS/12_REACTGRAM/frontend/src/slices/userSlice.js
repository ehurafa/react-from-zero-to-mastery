import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
    user: {},
    erro: false,
    success: false,
    loading: false,
    message: null
}

// function

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        resetMessage: (state) => {
            state.message = null;
        }
    }
});

export const { resetMessage } = userSlice.actions;
export default userSlice.reducer;