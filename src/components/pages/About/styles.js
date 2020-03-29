import styled from 'styled-components';

export const Title = styled.h1`
    text-align: center;
`;

export const Flexbox = styled.div`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;

    &.invisible {
        opacity: 0;
        transition: opacity 2s;
    }

    &.visible {
        opacity: 1;
        transition: opacity 2s;
    }
`;