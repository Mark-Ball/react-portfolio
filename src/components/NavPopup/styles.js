import styled from 'styled-components';
import { COLOURS, TRANSITIONTIME } from '../../constants';

const width = 200; // px
const navBarHeight = 82; // px

export const Popup = styled.div`
    background-color: ${COLOURS.GREY};
    color: ${COLOURS.BASE};
    height: calc(100vh - ${navBarHeight}px);
    width: ${width}px;
    position: absolute;
    top: ${navBarHeight}px;
    right: -${width}px;
    z-index: 10;
    transition: right ${TRANSITIONTIME};

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

    &.open {
        right: 0;
    }

    a {
        color: ${COLOURS.BASE};
        cursor: pointer;
        font-size: 20px;
        font-weight: bold;
        text-decoration: none;
        transition: color ${TRANSITIONTIME};

        :hover {
            color: ${COLOURS.HIGHLIGHT};
        }
    }
`;