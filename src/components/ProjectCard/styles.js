import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Card = styled.div`
    height: 200px;
    width: 200px;
    border: 2px solid black;
    border-radius: 8px;
    background-color: red;

    :hover {
        background-color: ${COLOURS.HIGHLIGHT};
    }
`;