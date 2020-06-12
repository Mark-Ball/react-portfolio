import styled from 'styled-components';
import { COLOURS } from '../../../constants';

export const Container = styled.div`
    display: inline-block;
    height: calc(100vh - 82px);
    width: 100vw;
    background: ${COLOURS.MIDBLUE};
`;

export const Title = styled.h1`
    display: inline;
    position: fixed;
    top: 50%;
    left: 50%;
    color: ${COLOURS.BASE};
    margin: 0;
    padding: 3em;
`;

export const WebSpan = styled.span`
    color: ${COLOURS.HIGHLIGHT};
`;

export const Background = styled.div`
    display: inline-block;
    background-image: url(${props => props.image});
    background-size: cover;
    filter: grayscale(100%);
    height: 100%;
    width: 100%;
`;