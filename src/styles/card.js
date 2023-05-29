import styled from "styled-components";

export const Card = styled.div`
    width: 100%;
    height: 100%;
    border: 2px solid ${props => props.theme.orange};
`

export const CardImage = styled.img`
    width: 100%;
    height: 100px;
`

export const CardBody = styled.div`
    width: 100%;
`