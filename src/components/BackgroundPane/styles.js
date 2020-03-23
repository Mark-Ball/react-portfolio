import styled from 'styled-components';

export const Pane = styled.div`
    height: calc(100vh - 82px);
    width: 25vw;
    border: 1px solid black;

    filter: blur(1px) brightness(.1) grayscale(.5);
    background-size: cover;
    background-image: url("pane1.png");
`;