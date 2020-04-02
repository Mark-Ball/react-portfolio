import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Row = styled.div`
    p, div, span {
        display: inline-block;
        height: 30px;
    }

    p {
        background-color: ${COLOURS.HIGHLIGHT};
        border: 1px solid ${COLOURS.DARKHIGHLIGHT};
        color: ${COLOURS.BASE};
        width: 75px;
    }

    div {
        background-color: ${COLOURS.BASE};
        border-top: 1px solid ${COLOURS.DARKHIGHLIGHT};
        border-bottom: 1px solid ${COLOURS.DARKHIGHLIGHT};
        position: relative;
        width: 200px;
        vertical-align: middle;
    }

    .bar {
        background-color: ${COLOURS.DARKHIGHLIGHT};
        height: 100%;
        position: absolute;
        top: 20;
    }

    span {
        background-color: ${COLOURS.HIGHLIGHT};
        border: 1px solid ${COLOURS.DARKHIGHLIGHT};
        color: white;
        width: 40px;
    }
`;