import React from "react";
import styled from "styled-components";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { selectBeakers, addEmptyBeaker } from "../domain/puzzle/puzzleSlice";
import { Beaker } from "../domain/puzzle/puzzleSlice";
import BeakerComponent from "./Beaker";
import Controls from "./Controls";

const PuzzleContainer = styled.div`
  .beaker-display {
    display: flex;
    width: 100%;
    /* flex-wrap: wrap; */
    flex-direction: row;
  }
`;

const Puzzle = () => {
  const beakers = useAppSelector(selectBeakers);

  return (
    <PuzzleContainer>
      <Controls/>
      <div className="beaker-display">
        {beakers.map((beaker: Beaker) => {
          return <BeakerComponent beaker={beaker} />;
        })}
      </div>
    </PuzzleContainer>
  );
};

export default Puzzle;
