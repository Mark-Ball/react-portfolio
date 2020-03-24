import styled from 'styled-components';
import { COLOURS } from '../../constants';

export const Line = styled.div`
    height: 40px;
    text-align: center;

    span {
        background: ${COLOURS.HIGHLIGHT};
        display: inline-block;
        height: 5px;
        width: 40px;
    }
    
`;