import styled from 'styled-components';
import { COLOURS } from '../../../constants';

export const Container = styled.div`
    height: calc(100vh - 82px);
    width: 100vw;
    background: ${COLOURS.MIDBLUE};

    display: flex;
    justify-content: space-between;
`;

export const Title = styled.h1`
    color: ${COLOURS.BASE};
    margin: 0;
    padding: 3em;
`;

export const WebSpan = styled.span`
    color: ${COLOURS.HIGHLIGHT};
`;