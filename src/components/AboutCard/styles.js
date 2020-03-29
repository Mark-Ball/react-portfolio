import styled from 'styled-components';
import { COLOURS } from '../../constants';

const height = 250; // px
const width = 250; // px

export const Card = styled.div`
    height: ${height}px;
    width: ${width}px;

    h1 {
        font-size: 30px;
        margin: 0;
        text-align: center;
        text-transform: uppercase;
    }

    p {
        position: relative;
        top: -10px;
        opacity: 0;
        margin: 0;
        text-align: center;
        transition: all .5s;
    }

    p.show {
        top: 0px;
        opacity: 1;
    }
`;

export const IconContainer = styled.div`
    height: 50%;
    width: 50%;
    margin: 10px auto;
    background-color: ${COLOURS.BASE};
    background-size: cover;
    cursor: pointer;
`;