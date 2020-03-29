import styled from 'styled-components';
import { COLOURS, TRANSITIONTIME } from '../../constants';

const height = 30; // px
const width = 45; // px

export const HamburgerIcon = styled.div`
    height: ${height}px;
    width: ${width}px;
    position: relative;
    margin: 10px;
    cursor: pointer;

    span {
        background: ${COLOURS.BASE};
        display: block;
        position: absolute;
        height: 20%;
        width: 100%;
        border-radius: ${height * 0.2}px;

        transition: all ${TRANSITIONTIME};
        -o-transition: all ${TRANSITIONTIME};
        -ms-transition: all ${TRANSITIONTIME};
        -moz-transition: all ${TRANSITIONTIME};
        -webkit-transition: all ${TRANSITIONTIME};
    }

    :hover span {
        background: ${COLOURS.HIGHLIGHT};
    }

    span:nth-child(2), span:nth-child(3) {
        top: ${height * 0.4}px;
        transform: rotate(0deg);
    }

    span:nth-child(4) {
        top: ${height * 0.8}px;
    }

    &.open span:nth-child(1), &.open span:nth-child(4)  {
        opacity: 0;
    }

    &.open span:nth-child(2) {
        transform: rotate(45deg);
    }

    &.open span:nth-child(3) {
        transform: rotate(-45deg);
    }
`;