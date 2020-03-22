import styled from 'styled-components';
import { COLOURS, TRANSITIONTIME } from '../../constants';

export const Topbar = styled.div`
    background-color: ${COLOURS.DARKBLUE};
    margin: 0;
    padding: 1em;

    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color: ${COLOURS.BASE};
    transition: color ${TRANSITIONTIME};
    -o-transition: color ${TRANSITIONTIME};
    -ms-transition: color ${TRANSITIONTIME};
    -moz-transition: color ${TRANSITIONTIME};
    -webkit-transition: color ${TRANSITIONTIME};
    margin: 0;
    margin: auto 0;
    cursor: pointer;

    &:hover {
        color: ${COLOURS.HIGHLIGHT};
    }
`;

export const Box = styled.div`
    position: relative;
    height: 100px;
    width: 200px;
    background: linear-gradient(to right, green 50%, pink 50%);
    border: 1px solid black;
    transform: translate(0px);
    transition: transform 1s;

    &:hover {
        transform: translate(100px);
        transition: transform 1s;
    }
`;