import styled from 'styled-components';
import { COLOURS } from '../../../constants';

export const CForm = styled.form`
    display: flex;
    flex-direction: column;
    max-width: 600px;
    margin: 0 auto;

    h1 {
        text-align: center;
    }

    .flex {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    input[type='submit'] {
        background: ${COLOURS.HIGHLIGHT};
        border: none;
        color: white;
        font-size: large;
        font-weight: bold;
        height: 50px;
        letter-spacing: 2px;
        transition: all .5s;

        :hover {
            letter-spacing: 4px;
            background: ${COLOURS.DARKHIGHLIGHT};
        }
        
    }
`;