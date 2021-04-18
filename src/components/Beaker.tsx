import styled from "styled-components";
import { Color } from "../domain/Color";
import { Beaker } from "../domain/puzzle/puzzleSlice";

const BeakerContainer = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding-top: 1rem;
    /* position: relative; */
    .glass {
        /* position: absolute; */
        height: 100px;
        width: 20px;
        border: 5px solid grey;
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
    }
    .bottom {
        border-bottom-left-radius: 60px;
        border-bottom-right-radius: 60px;
    }
    
`;

const Liquid = styled.div<{color: string}>`
    background-color: #${props => props.color};
    width: 100%;
    height: 25%;

`;

// There is probably a much more elegant way to do this but it works for now
const sanitizeContents = (colors: Color[]) => {
    console.log("COLORS!", colors);
    let sanitizedColors = [...colors];
    while(sanitizedColors.length < 4) {
        sanitizedColors.unshift(Color.EMPTY)
    }
    return sanitizedColors;
};

type BeakerProps = {
    beaker: Beaker;
}

const BeakerComponent = (props: BeakerProps) => {
    const colors = props.beaker.colors;
    if(colors.length > 4) {
        console.error("You're overflowing the tube!");
        return null;
    }
    const sanitizedContents = sanitizeContents(props.beaker.colors);
    return (
        <BeakerContainer>
            <div className="glass">
                {sanitizedContents.map((color: Color, index: number) => 
                    <Liquid key={index} className={`${index === 3 ? "bottom" : ""}`} color={color.toString()}>{""}</Liquid>
                )}
            </div>
        </BeakerContainer> 
    )
};

export default BeakerComponent;