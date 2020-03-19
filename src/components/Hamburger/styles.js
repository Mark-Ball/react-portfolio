import styled from 'styled-components';
import { COLOURS } from '../../constants';

const height = 30; // px
const width = 45; // px
const transitionSpeed = .25; // seconds
const barColour = '#f2f2f2';

export const HamburgerIcon = styled.div`
    height: ${height}px;
    width: ${width}px;
    position: relative;
    margin: 10px;
    cursor: pointer;

    & span:nth-child(1) {
        opacity: 1;
        transition: opacity ${transitionSpeed * 2}s;
    }

    & span:nth-child(2), span:nth-child(3) {
        top: ${height * 0.4}px;
        transform: rotate(0deg);
        transition: transform ${transitionSpeed}s;
    }

    & span:nth-child(4) {
        top: ${height * 0.8}px;
        opacity: 1;
        transition: opacity ${transitionSpeed * 2}s;
    }

    &.open span:nth-child(1), &.open span:nth-child(4)  {
        opacity: 0;
        transition: opacity ${transitionSpeed * 2}s;
    }

    &.open span:nth-child(2) {
        transform: rotate(45deg);
        transition: transform ${transitionSpeed}s;
    }

    &.open span:nth-child(3) {
        transform: rotate(-45deg);
        transition: transform ${transitionSpeed}s;
    }

    &:hover span {
        background: ${COLOURS.HIGHLIGHT};
    }
`;

export const Bar = styled.span`
    display: block;
    position: absolute;
    height: 20%;
    width: 100%;
    background: ${barColour};
    border-radius: ${height * 0.2}px;
`;