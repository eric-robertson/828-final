import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../store';

export interface LocationState {
	page: string[];
}

const initialState: LocationState = {
	page: [''],
};

export const locationSlice = createSlice({
	name: 'location',
	initialState,
	reducers: {
        changeLocation: (state, action: PayloadAction<string[]>) => {
            state.page = action.payload
        },
	}
});

export const { changeLocation } = locationSlice.actions;

export const selectLocation = (state: RootState) => state.location.page;

export default locationSlice.reducer;
