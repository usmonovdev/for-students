import styled from "styled-components";

export const DisplayGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: ${props => props.gap};
`