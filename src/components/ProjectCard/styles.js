import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Card = styled.div`
    height: 200px;
    width: 200px;
    border: 1px solid grey;
    border-radius: 8px;
    background-color: ${COLOURS.BASE};
    transition: 1s all;
    cursor: pointer;

    :hover {
        background-color: ${COLOURS.DARKBLUE};

        p {
            color: white;
        }
    }

    p {
        font-weight: bold;
        text-align: center;
        margin: 0;
        padding-top: 75px;
    }
`;