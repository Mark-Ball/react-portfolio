import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Row = styled.div`
    display: flex;
    justify-content: left;
    align-items: center;
    height: 45px;
    width: 100%;

    p, div, span {
        display: inline-block;
        height: 30px;
    }

    p {
        background-color: ${COLOURS.HIGHLIGHT};
        border: 1px solid ${COLOURS.DARKHIGHLIGHT};
        color: white;
        line-height: 2;
        width: 110px;
    }

    div {
        background-color: ${COLOURS.BASE};
        border-top: 1px solid ${COLOURS.DARKHIGHLIGHT};
        border-bottom: 1px solid ${COLOURS.DARKHIGHLIGHT};
        position: relative;
        width: calc(100% - 150px);
    }

    .bar {
        background-color: ${COLOURS.DARKHIGHLIGHT};
        height: calc(100% - 1px);
    }

    span {
        background-color: ${COLOURS.HIGHLIGHT};
        border: 1px solid ${COLOURS.DARKHIGHLIGHT};
        color: white;
        line-height: 2;
        text-align: center;
        width: 40px;
    }
`;