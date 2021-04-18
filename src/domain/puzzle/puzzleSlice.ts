import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
import { Color } from "../Color"

export type Beaker = {
    colors: Color[];
}

export interface PuzzleState {
    beakers: Beaker[];
    solveStatus: "solved" | "unsolved" | "unsolveable";
}

const initialState: PuzzleState = {
    beakers: [],
    solveStatus: "unsolved"
}

export const puzzleSlice = createSlice({
    initialState,
    name: "puzzle",
    reducers: {
        addBeaker: (state, action: PayloadAction<Beaker>) => {
            state.beakers.push(action.payload)
        } ,
        addEmptyBeaker: (state) => {
            state.beakers.push({colors: []});
        },
        clearBeakers: (state) => {
            state.beakers = []
        }
    }
});

export const { addBeaker, addEmptyBeaker, clearBeakers } = puzzleSlice.actions;

export const selectBeakers = (state: RootState) => state.puzzle.beakers;

export default puzzleSlice.reducer;