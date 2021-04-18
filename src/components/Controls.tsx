import React, { useState } from "react";
import styled from "styled-components";
import { useAppDispatch } from "../app/hooks";
import { Color } from "../domain/Color";
import { addBeaker, addEmptyBeaker, Beaker, clearBeakers } from "../domain/puzzle/puzzleSlice";
import BeakerComponent from "./Beaker";

const ControlsContainer = styled.div`
    display: flex;
    justify-content: space-around;
    width: 100%;
    margin: auto;
    padding-bottom: 1rem;
    flex-direction: column;
    border-bottom: 1px solid grey;
    > * {
        padding: 0.5rem;
       
    }
    .row {
        display: flex;
        flex-direction: row;
        justify-content: center;
    }
`;

const Controls = () => {
    const dispatch = useAppDispatch();
    const onAddBeaker = () => {
      dispatch(addBeaker(beaker));
    };
    const onClearBeakers = () => {
        dispatch(clearBeakers());
    };
    const initialBeaker = {
        colors: []
    }
    const onClearBeaker = () => {
        setBeaker(initialBeaker);
    };
    const [beaker, setBeaker] = useState<Beaker>(initialBeaker);
    return (
        <ControlsContainer>
            <div className="row">
                <button onClick={onAddBeaker}>Add Beaker</button>
                <button onClick={onClearBeaker}>Clear Beaker</button>
                <BeakerComponent beaker={beaker} />
                <button onClick={onClearBeakers}>Clear Beakers</button>
            </div>
            <h2>Color Controls</h2>
            <div className="row">
                {Object.keys(Color).map((color: string) => {
                    if(color === "EMPTY") return null;
                    const addColor = () => {
                        setBeaker({
                            colors: [...beaker.colors, Color[color as keyof typeof Color]]
                        })
                    };
                    return (
                        <button onClick={addColor}>Add {color}</button>
                    )})}
            </div>
        </ControlsContainer>
    )
};

export default Controls;