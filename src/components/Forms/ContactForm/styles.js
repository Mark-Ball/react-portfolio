import styled from 'styled-components';
import { COLOURS } from '../../../constants';

export const CForm = styled.form`
    display: flex;
    flex-direction: column;
    padding-right: 30px;
    padding-left: 30px;
    max-width: 900px;
    margin: 0 auto;

    h1 {
        text-align: center;
    }

    .flex {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }

    input[type='submit'] {
        background: ${COLOURS.HIGHLIGHT};
        border: none;
        color: white;
        cursor: pointer;
        font-size: large;
        font-weight: bold;
        height: 50px;
        width: 852px;
        max-width: 100%;
        margin: auto;
        text-align: center;
        letter-spacing: 2px;
        transition: all .5s;

        :hover {
            letter-spacing: 4px;
            background: ${COLOURS.DARKHIGHLIGHT};
        }
    }
`;